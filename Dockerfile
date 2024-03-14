# Stage 1: Build the React application
FROM node:20.11.1 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the React application with Vite's development server
FROM node:20.11.1

# Set working directory
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app/build ./build

# Expose port 3000 to the Docker host
EXPOSE 3000

# Start Vite development server
CMD ["npm", "run", "dev"]