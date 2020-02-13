FROM node:10

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./src ./src
COPY ./*.js ./

CMD [ "npm", "test" ]
#CMD ["java", "-version"]
#CMD ["google-chrome", "--version"]
