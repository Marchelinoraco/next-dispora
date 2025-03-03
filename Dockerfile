# Use the official Node.js version from https://hub.docker.com/
FROM node:20.9.0-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy only the package.json file to the working directory
COPY package.json .

# Install npm dependencies based on the package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3001 to allow external access
EXPOSE 3001

# Specify the command to run the application when the container starts
CMD [ "npm", "run", "dev"]