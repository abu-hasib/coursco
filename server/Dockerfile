FROM node:18
WORKDIR /.
RUN ls
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 8080
CMD [ "node", "dist/server" ]