# 1.Use the official Node.js image
FROM node:18-slim

# 2. Create an app directory inside the container
WORKDIR /urs/src/app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# 4. Copy the rest of your backend source code
COPY . .

# 5. The port your app listens on
EXPOSE 8080

# 6. THE command to start your backend
CMD [ "node", "index.js" ]
