#  Dockerfile for Node Express Backend
# docker build -t express-ftp-server .
# docker run -p 5000:5000 express-ftp-server

FROM node:10.16-alpine

# Create App Directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["npm","start"]