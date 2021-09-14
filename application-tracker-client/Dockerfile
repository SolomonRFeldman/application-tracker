FROM node:13.12.0-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install
RUN npm install react-scripts@3.4.1

COPY ./ /app/

RUN npm run build
RUN yarn global add serve

CMD ["serve", "-s", "build", "-l", "3000"] 