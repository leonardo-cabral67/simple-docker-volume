FROM node:20.14.0-alpine as build
WORKDIR /app
COPY package*.json ./
COPY . .
EXPOSE 3000
