# pull the base image
FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

# set the working direction
WORKDIR /home/node/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# add app
COPY . ./

EXPOSE 3000

USER node

# start app
CMD ["yarn", "start"]