FROM node:20.6.1

WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["node", "index.js"]
