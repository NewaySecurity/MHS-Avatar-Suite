#!/bin/bash

# MHS Avatar Suite Setup Script

# Load environment variables
if [ -f ".env" ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

# Install global dependencies
npm install -g concurrently live-server

# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..

# Build frontend
cd frontend
npm run build
cd ..

echo "MHS Avatar Suite setup complete!"
echo "Run 'npm run dev' to start development mode."
