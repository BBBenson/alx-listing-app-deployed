#!/bin/bash

# Exit on any error
set -e

echo "Starting Vercel deployment..."

# Install Vercel CLI globally if not already installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Ensure the user is logged into Vercel
if ! vercel whoami &> /dev/null; then
    echo "Please log in to Vercel:"
    vercel login
fi

# Read student ID and convert to lowercase
read -p "Enter your ALX student ID (lowercase letters and numbers only): " STUDENT_ID
STUDENT_ID=$(echo "$STUDENT_ID" | tr '[:upper:]' '[:lower:]' | tr -cd '[:alnum:]')

# Set the project name to include the student ID
PROJECT_NAME="alx-listing-app-$STUDENT_ID"

echo "Using project name: $PROJECT_NAME"

# Create a temporary vercel.json file to set the project name
echo "{\"name\": \"$PROJECT_NAME\"}" > vercel-temp.json

# Deploy to Vercel
vercel --yes --prod

# Clean up temporary file
rm vercel-temp.json

echo "Deployment completed successfully!"
echo "Your app is live at: https://$PROJECT_NAME.vercel.app"
echo ""
echo "Important: Please manually add your environment variables in the Vercel dashboard:"
echo "1. Go to your project settings in Vercel: https://vercel.com/$(vercel whoami 2>/dev/null | awk '{print $2}')/$PROJECT_NAME/settings"
echo "2. Navigate to 'Environment Variables'"
echo "3. Add the same variables from your .env.local file"