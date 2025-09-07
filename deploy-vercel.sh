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

# Read student ID
read -p "Enter your ALX student ID: " STUDENT_ID

# Set the project name to include the student ID
PROJECT_NAME="alx-listing-app-$STUDENT_ID"

# Deploy to Vercel with the specified project name
vercel --yes --name "$PROJECT_NAME"

echo "Deployment completed successfully!"
echo "Your app is live at: https://$PROJECT_NAME.vercel.app"
echo ""
echo "Important: Please manually add your environment variables in the Vercel dashboard:"
echo "1. Go to your project settings in Vercel"
echo "2. Navigate to 'Environment Variables'"
echo "3. Add the same variables from your .env.local file"