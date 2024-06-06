FROM node:20-alpine
EXPOSE 3000
WORKDIR /usr/src/datasight
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]