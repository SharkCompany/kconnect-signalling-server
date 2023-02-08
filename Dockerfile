FROM node:16

# Create app directory
WORKDIR /

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn --prod
# If you are building your code for production
# RUN npm ci --only=production

RUN yarn build

# Bundle app source
COPY . .

EXPOSE 8999
CMD [ "yarn", "start" ]