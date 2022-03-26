FROM node:16

WORKDIR /usr/src/app

COPY server/package.json .
COPY server/package-lock.json .

RUN npm ci --only=production

COPY server .

EXPOSE 5000
CMD [ "node", "src/index.js"]