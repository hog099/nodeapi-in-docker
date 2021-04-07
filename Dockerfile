FROM node:14
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm build
EXPOSE 4000
CMD [ "node", "dist/server.js" ]