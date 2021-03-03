### Base-builder

FROM node:12-alpine as base-builder

WORKDIR /usr/src/app

### Builder-a

FROM base-builder as builder-a

COPY ./service-a/package*.json ./

RUN npm install

COPY ./service-a/server.js ./

EXPOSE 8080

CMD [ "node", "server.js" ]

### Builder-b

FROM base-builder as builder-b

COPY ./service-b/package*.json ./

RUN npm install

COPY ./service-b/server.js ./

EXPOSE 8081

CMD [ "node", "server.js" ]
