FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

ENV PORT=8080
EXPOSE 8080

CMD ["yarn", "serve", "--host", "0.0.0.0"]