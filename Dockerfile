# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies (optional if no package.json)
RUN npm install || true

# Expose port 80
EXPOSE 80

# Start the server (adjust if needed)
CMD ["node", "index.js"]
