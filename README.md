# DevOps Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Chakra UI, showcasing my skills, experience, and projects in the DevOps and Cloud space.

## Features

- **Modern UI** - Clean, responsive design with Chakra UI components
- **Dynamic Content** - Fetches real-time data from GitHub and YouTube APIs
- **Dark/Light Mode** - Supports dark and light themes
- **Optimized Performance** - Built with Vite for fast loading and development
- **Mobile-Friendly** - Fully responsive on all devices

## Tech Stack

- **Frontend**: React, Chakra UI, TypeScript
- **Build Tool**: Vite
- **APIs**: GitHub API, YouTube API
- **Deployment**: GitHub Pages

## Installation and Setup

1. Clone the repository

```bash
git clone https://github.com/ydvsailendar/me.git
cd me
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory with your API keys

```
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
VITE_YOUTUBE_CHANNEL_ID=your_youtube_channel_id_here
VITE_GITHUB_USERNAME=your_github_username_here
VITE_GITHUB_TOKEN=your_github_personal_access_token_here
```

4. Start the development server

```bash
npm run dev
```

5. Build for production

```bash
npm run build
```

## Deployment

This project is deployed to GitHub Pages:

### GitHub Pages

- Set up GitHub Pages in your repository settings
- GitHub Actions workflow is configured in `.github/workflows/gh-pages.yml`
- The site will be deployed to <https://ydvsailendar.github.io/me/>

## License

MIT
