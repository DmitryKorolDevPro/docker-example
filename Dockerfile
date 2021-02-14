FROM node:12-alpine as builder-a

WORKDIR /usr/src/app

COPY package*.json ./service-a

RUN npm install

COPY . ./service-a

EXPOSE 8080

CMD [ "node", "server.js" ]


FROM node:12-alpine as builder-b

WORKDIR /usr/src/app

COPY package*.json ./service-b

RUN npm install

COPY . ./service-b

EXPOSE 8081

CMD [ "node", "server.js" ]
