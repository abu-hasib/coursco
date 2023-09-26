FROM node:18
WORKDIR /server
RUN pwd
RUN ls
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 8080
CMD [ "node", "server/dist/server" ]