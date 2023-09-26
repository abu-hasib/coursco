FROM node:18
WORKDIR /server
COPY . /server/
RUN ls
RUN cd server
RUN ls
COPY package*.json ./
RUN yarn
RUN yarn build
EXPOSE 8080
CMD [ "node", "server/dist/server" ]