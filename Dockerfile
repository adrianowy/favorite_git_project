# pull the base image
FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

# set the working direction
WORKDIR /home/node/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./

RUN npm install
RUN npm install --global yarn

# add app
COPY . ./

EXPOSE 3000

# start app
# CMD ["npm", "start"]
CMD ["yarn", "start"]