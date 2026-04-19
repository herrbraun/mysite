FROM node:11

# Set environment
RUN npm install gitbook-cli -g && \
    gitbook install && \
    apt-get update && \
    apt-get install -y git && \
    apt-get clean

# Build book
WORKDIR /book
COPY . .
