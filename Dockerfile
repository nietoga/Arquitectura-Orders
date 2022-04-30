FROM node:lts-alpine

WORKDIR /app
COPY . .

ENV NODE_ENV=production

RUN npm install --production
RUN npm run build --production

RUN npm install -g serve
CMD serve -s build
EXPOSE 3000
