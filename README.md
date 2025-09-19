# Project Zephyrus EC Hub

A modern React application for displaying and navigating Project Zephyrus Expert Contributor guidelines and tutorial videos.

## 🚀 Live Demo

Visit the live application: [https://snorkel-ai.github.io/Zephyrus_EC_Hub](https://snorkel-ai.github.io/Zephyrus_EC_Hub)

## Features

- **Interactive Guidelines Display**: Browse all guidelines with a clean, modern interface
- **Tutorial Videos**: Watch step-by-step submission walkthrough videos
- **Tab Navigation**: Switch between Guidelines and Tutorials seamlessly
- **Category Filtering**: Filter guidelines by category (Overview, Criteria, Grading, Rates, Updates, UI Guide, Examples)
- **Search Functionality**: Search through guidelines content and titles
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Light Theme**: Clean white/light gray design with blue accent colors
- **Automated Deployment**: Continuous deployment via GitHub Actions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd /Users/connor/Documents/Zephyrus_EC_Hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
src/
├── App.js              # Main application component
├── App.css             # Styling for the application
├── index.js            # React entry point
└── data/
    └── guidelines.js   # Guidelines data extracted from text files
```

## Guidelines Content

The app displays content from the following text files:
- Project Zephyrus EC Guidelines.txt - Main overview and workflow
- Project Zephyrus EC Guidelines (1).txt - Rate schedules
- Project Zephyrus EC Guidelines (2).txt - Change log
- Project Zephyrus EC Guidelines (3).txt - UI walkthrough
- Project Zephyrus EC Guidelines (4).txt - Correct examples
- Project Zephyrus EC Guidelines (5).txt - Incorrect examples

## How to Use

1. **Browse Guidelines**: Click on any guideline in the sidebar to view its content
2. **Filter by Category**: Use the category buttons to filter guidelines by type
3. **Search**: Use the search bar to find specific information across all guidelines
4. **Navigate**: The interface is fully responsive and works on all devices

## Customization

To add new guidelines or modify existing ones, edit the `src/data/guidelines.js` file. Each guideline should have:
- `id`: Unique identifier
- `title`: Display name
- `content`: Full text content
- `category`: Category for filtering

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## Technologies Used

- React 18
- CSS3 with modern features
- Responsive design
- Local state management
- GitHub Actions (CI/CD)
- GitHub Pages (Hosting)

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. **Triggers**: Runs on every push to the `main` branch
2. **Build Process**: Installs dependencies, builds the React app
3. **Deploy**: Automatically deploys to GitHub Pages
4. **Live URL**: [https://snorkel-ai.github.io/Zephyrus_EC_Hub](https://snorkel-ai.github.io/Zephyrus_EC_Hub)

### Manual Deployment

You can also deploy manually using:
```bash
npm run deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Changes to the `main` branch will automatically trigger a new deployment.
