FROM mhart/alpine-node:8

WORKDIR /proj
ADD package.json package.json

RUN apk add --no-cache make gcc g++ python

RUN npm install

WORKDIR /proj/src
ADD . .

CMD ["node", "server.js"]
