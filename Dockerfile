FROM node:latest
WORKDIR /srv/app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["node", "dist/index.js"]