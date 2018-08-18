FROM mhart/alpine-node:10

WORKDIR /usr/src

COPY * ./

ARG REDIRECT_URL

RUN mkdir /public && touch /public/index.html

RUN node ./build.js

RUN ls /public
