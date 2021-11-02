# pull official base image
FROM node

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install --silent --loglevel verbose
RUN npm install react-scripts -g --silent --loglevel verbose
RUN npm fund
RUN npm audit fix

# add app
COPY . .

# start app
CMD ["npm", "start"]