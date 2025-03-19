# DevOps Portfolio

A modern single-page application showcasing your latest YouTube videos and GitHub projects.

## Features

- Display latest YouTube videos from your channel
- Show top 5 most recently updated GitHub repositories
- Responsive design with modern UI
- Easy to customize and deploy

## Prerequisites

- Node.js (v14 or higher)
- YouTube API Key
- GitHub account

## Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory based on `.env.example`:

   ```
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
   VITE_YOUTUBE_CHANNEL_ID=UCj2UKmHNkF__FFlwGGM0C1w
   VITE_GITHUB_USERNAME=ydvsailendar
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Environment Variables

- `VITE_YOUTUBE_API_KEY`: Your YouTube Data API v3 key
- `VITE_YOUTUBE_CHANNEL_ID`: Your YouTube channel ID
- `VITE_GITHUB_USERNAME`: Your GitHub username

## Development

To start the development server:

```bash
npm run dev
```

## Build

To build for production:

```bash
npm run build
```

## Technologies Used

- React
- TypeScript
- Vite
- Chakra UI
- YouTube Data API v3
- GitHub REST API
