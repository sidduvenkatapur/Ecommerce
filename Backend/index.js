const port = 8080;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require("multer");
const multerS3 = require('multer-s3')
const path = require("path");
const cors = require("cors");
const { log, Console } = require("console");

app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI || "mongodb+srv://vsiddu16:haTr9Iig55KdE1Ui@cluster0.idffgsw.mongodb.net/E-commerce?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected:", mongoURI);
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message || error);
    if (mongoURI.startsWith("mongodb+srv://")) {
      console.error("Atlas SRV connection failed. Check your network/DNS and verify the connection string is valid.");
    }
  });

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

// API creation

app.get("/",(req,res)=>{
    res.send("Express is Running");
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on port 8080");
       }

       else{
        console.log("Error:"+error);
       }
})

//Image storage Engine
// Initialize AWS S3 Client
const s3 = new S3Client({
    region:'us-east-1',
    credentials:{
        accessKeyId:secrets.AWS_ACCESS_KEY_ID,
        secretAccessKey:secrets.AWS_SECRET_ACCESS_KEY,
    }
});

//New Images storage Engine using s3

const storage  = multerS3({
    s3:s3,
    bucket: 'ecommerce-product-images-s3-865230234414-us-east-1-an',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb){
        const uniqueName = `${path.parse(file.originalname).name}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null,uniqueName)
    }
});

const upload = multer({storage:storage});

//upload endpoint

app.post('/upload', upload.single('product'),(req, res)=>{
    res.json({
        success: 1,
        //req.file.location automatically provides the full absolute https s3 URL link
        image_url: req.file.location
    })
})


// const storage = multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.originalname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage:storage})

// //Upload end point 
// // app.use('/images',express.static('upload/images'))
// app.post('/upload',upload.single('product'),(req,res)=>{
//  res.json({
//     success:1,
//     image_url:`http://app-load-balancer-2109406327.us-east-1.elb.amazonaws.com:8080/images/${req.file.filename}`
//  })
// })

//Schema for product

const Product = mongoose.model("product",{
    id:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    new_price:{
       type:Number,
       require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },

})

//API for add product

app.post("/addproduct", async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})


//API for remove product
app.post("/removeproduct", async (req,res)=>{
   await Product.findOneAndDelete({
    id:req.body.id
   });

   res.json({
    success:true,
    name:req.body.name,
   })
})


// API fo getting all products

app.get("/allproducts", async (req,res)=>{
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
})


//Shema for User

const User = mongoose.model('user', {
    name:{
        type:String,
    },
    email:{
       type:String,
       unique:true, 
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating end point for registring the user

app.post("/signup", async(req,res)=>{
    let check = await User.findOne({email:req.body.email});
    //Checking existing user
    if(check){
        return res.status(400).json({success:false,error:"existing user found"})
    }
    //Empty cart creation
    let cart ={};
    for(let i = 0; i<300; i++){
        cart[i]=0;
    }
    //Creating the user
    const user = new User({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    //Saving user in the database
    await user.save();

     // creating JWT token
    const data = {
        user:{
            id:user.id
        }
    }
  

   const token = jwt.sign(data,'secret_ecom');

   res.json({success:true, token,username:req.body.username})
})


//API for Login

app.post("/login", async(req,res)=>{
    const user = await User.findOne({email:req.body.email});
    // const username = await User.findOne({username:user.username})
    if(user){
        const passwordCompare = req.body.password === user.password;
        if(passwordCompare){
            const data ={
                user:{
                    id:user.id
                }
            }

            const token = jwt.sign(data,'secret_ecom')
        res.json({success:true,token,username:user.name});
        // res.json({username:user.name})
        }
        else{
            res.json({success:false, error:"Wrong password"})
        }

        //JWT token
        
    }
    else{
        res.json({success:false, error:"Wrong email ID"})
    }
})

//API for new collection products

app.get("/newcollections", async(req,res)=>{
    let products = await Product.find({});
    let newcollections = products.slice(1).slice(-8);
    console.log("New collection fetched");
    res.send(newcollections);
})

//API for populars in womens

app.get("/popularinwomen", async(req,res)=>{
    let products = await Product.find({category:"Women"});
    let popularinwomen = products.slice(0,4);
    console.log("populars in womens fetched");
    res.send(popularinwomen);
})

//Creating middleware to fetch user

const fetchuser= async(req,res,next)=>{
const token = req.header("auth-token");
if(!token){
    res.status(401).send({error:"PLease authenticate using valid token"})
}
else{
    try{
       const data = jwt.verify(token,"secret_ecom");
       req.user = data.user;
       next();
    }
    catch{
      res.status(401).send({error:"Please authenticate using valid token"})
    }
}
}

//API for Addtocart
app.post("/addtocart",fetchuser,async(req,res)=>{
    let userData = await User.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send({success:"Item added to cart"});
})

//API for Remove from cart
app.post("/removefromcart",fetchuser,async(req,res)=>{
    let userData = await User.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("removed");
})

//API for get cart data

app.post("/getcart",fetchuser, async(req,res)=>{

    let userData = await User.findOne({_id:req.user.id});

    res.json(userData.cartData);
})
