# tatacheba.github.io

## Description

This project is a personal website created using TypeScript and Vite. The site includes various sections such as education, projects, and contact information. The source code is written in TypeScript, and Vite is used to build the project.

## Project Structure

- `public/` - contains static files that will be copied to the output directory during the build.
  - `data/` - contains data in JSON format used on the site.
- `src/` - source code of the project.
  - `components/` - contains Vue components.
  - `main.ts` - the main entry file for the application.
- `dist/` - output directory for the built project.

## Installation and Running the Project

### Prerequisites

Make sure you have Node.js and npm installed.

### Cloning the Repository

```bash
git clone https://github.com/tatacheba/tatacheba.github.io.git

cd tatacheba.github.io
```

Installing Dependencies

```bash
npm install
```

Running in Development Mode

```bash
npm run dev
```

Building the Project

```bash
npm run build
```

Serving the Built Project

```bash
npm run serve
```

Deployment on GitHub Pages

The project is automatically deployed to GitHub Pages from the gh-pages branch. Here are the steps to update the gh-pages branch:

Build the project:

```bash
npm run build
```

Navigate to the dist directory:

```bash
cd dist
```

Initialize a new Git repository (if not already done):

```bash
git init
```

Add all files to the commit:

```bash
git add .
git commit -m "Update site build"
```

Create the gh-pages branch and push it to the remote repository:

```bash
git branch -M gh-pages
git remote add origin https://github.com/tatacheba/tatacheba.github.io.git
git push -u origin gh-pages --force
```

Contact
If you have any questions or suggestions, please contact me via my GitHub profile.
