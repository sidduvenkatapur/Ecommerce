# Stage 1: The name  'build' must be defined here after 'AS'
FROM node:18-alpine AS installer
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2:
FROM nginx:stable-alpine
# This MUST match the name 'build' from line 2 
COPY --from=installer /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
