# Dockerfile for React client
# ------------------------------------------------------------
# docker build -t react-ftp-client .
# docker run -p 3000:3000 react-ftp-client
# ------------------------------------------------------------

# Build react client
FROM node:10.16-alpine

# Working directory
WORKDIR /usr/src

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]