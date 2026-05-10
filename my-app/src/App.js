
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Category from './components/pages/Category';
import Signup from './components/pages/Signup';
import Cart from './components/pages/Cart';
import ProductDetails from './components/pages/ProductDetails';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<Category  category="Men"/>} />
        <Route path='/womens' element={<Category category="Women" />} />
        <Route path='/kids' element={<Category  category="Kid"/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<ProductDetails />}>
          <Route path='/product/:id' element={<ProductDetails />}></Route>
        </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
   
    </div>
  );
}

export default App;
