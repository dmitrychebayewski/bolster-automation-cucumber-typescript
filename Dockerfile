FROM node:10

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./*.json ./

#Install jq
RUN apt-get update
RUN apt-get install jq --assume-yes
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./src ./src
COPY ./*.js ./
COPY ./wait-for-grid.sh ./

CMD ./wait-for-grid.sh && npm test
