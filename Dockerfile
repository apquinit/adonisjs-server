FROM node:12
LABEL maintainer="Alexander Paul P. Quinit <paulquinit@gmail.com>"

RUN mkdir -p /var/www/app/node_modules && chown -R node:node /var/www

WORKDIR /var/www

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npm", "start" ]
