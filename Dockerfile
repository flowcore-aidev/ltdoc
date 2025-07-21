FROM node:18
WORKDIR /app
COPY client/package*.json ./client/
RUN cd client && npm install
COPY client ./client
WORKDIR /app/client
EXPOSE 3000
CMD ["npm", "start"]
