FROM node:18

# Set working directory
WORKDIR /app

# Copy only package files first
COPY ./client/package*.json ./client/

# Install dependencies
RUN cd client && npm install

# Copy the rest of the frontend
COPY ./client ./client

# Move into client directory to run app
WORKDIR /app/client

# Open port
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
