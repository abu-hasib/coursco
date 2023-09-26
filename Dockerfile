FROM node:18
WORKDIR /server
COPY package*.json ./
RUN yarn
COPY . .
RUN ls
WORKDIR /server
RUN ls
RUN yarn build
EXPOSE 8080
CMD [ "node", "server/dist/server" ]