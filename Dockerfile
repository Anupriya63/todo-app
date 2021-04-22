FROM node:14-alpine as base

WORKDIR /src
COPY package*.json /src
EXPOSE 5005

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY ./apis /src
CMD ["node", "/src/apis/server.js"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY ./apis /src
CMD ["nodemon", "/src/apis/server.js"]