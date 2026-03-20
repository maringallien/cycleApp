# CycleApp

CycleApp is a React-based web application cycling application combining specialized navigation tools, community-driven features, and a gamified territory claiming system to enhance the cycling experience.

## Features

- **Smart Navigation**: Choose between "Safe," "Direct," and "Discovery" modes to find the best route for your needs.
- **Interactive Maps**: Real-time map overlays including heat maps, theft risk zones, and active territories.
- **Territory Capture**: Engage in a gamified experience by riding to claim and defend specific zones in your city.
- **Community Hub**: Join local cycling crews, participate in group battles, and report or track stolen bikes.
- **Route** : Discover official routes or create and save your own personal paths.

## Tech Stack

- **Frontend**: React 19.
- **Build Tool**: Vite 7.
- **Mapping**: Leaflet and React-Leaflet.
- **Styling**: Tailwind CSS 4.
- **Linting**: ESLint.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) v22+ (use [nvm](https://github.com/nvm-sh/nvm) to manage versions)
- npm (comes bundled with Node.js)

If you need to install nvm and Node.js 22:

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install and use Node 22
nvm install 22
nvm use 22
```

## Installation

To get the project running locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/maringallien/cycleApp
cd cycleApp
```

2. **Install dependencies:**

```bash
npm install

# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Install and use Node 22
nvm install 22
nvm use 22
```

3. **Run CycleApp**

```bash
npm run dev
```

Then open [http://localhost:5173/](http://localhost:5173/) in your browser.
