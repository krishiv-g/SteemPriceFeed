# Use the official Node.js 14 image as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem
COPY . .

# Define the command to run your app using CMD which defines your runtime
CMD ["node", "index.js"]
