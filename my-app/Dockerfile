# Stage 1: The name  'build' must be defined here after 'AS'
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# Stage 2:
FROM nginx:stable-alpine
# This MUST match the name 'build' from line 2 
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf .d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
