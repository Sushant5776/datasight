FROM node:20-alpine
EXPOSE 3000
WORKDIR /datasight/
COPY ./public ./public
COPY ./src ./src
COPY package.json ./package.json
RUN npm install
CMD ["npm", "run", "dev"]