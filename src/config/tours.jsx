// src/config/tours.js

export const homeTourPart1 = [
  {
    targetId: 'tour-modes',
    title: 'Smart Routing Modes',
    description: 'Choose Safe mode for protected paths, Direct for speed, or Discovery to find scenic new routes.',
    position: 'bottom',
    icon: '🚲'
  },
  {
    targetId: 'tour-layers-btn',
    title: 'Map Layers',
    description: 'This menu houses Activity heatmaps, Theft reports, and the Territory game. Tap Next to open it up!',
    position: 'left',
    icon: '🗺️'
  }
];

export const homeTourPart2 = [
  {
    targetId: 'tour-menu-filters',
    title: 'Activity & Safety',
    description: 'Toggle these to see popular cycling routes or high-risk theft areas to avoid.',
    position: 'left',
    icon: '🔥'
  },
  {
    targetId: 'tour-menu-territory',
    title: 'Territory Mode',
    description: 'Turn this on to view claimable zones on the map. Ride 2km inside a zone to capture it!',
    position: 'left',
    icon: '🚩'
  },
  {
    targetId: 'tour-menu-create',
    title: 'Create Your Own',
    description: 'Establish a new territory for your local group. Use this tool to draw new boundaries.',
    position: 'left',
    icon: '➕'
  }
];

export const routesTour = [
  {
    targetId: 'tour-routes-tabs',
    title: 'Route Collections',
    description: 'Toggle between highly-rated Official Routes and your own Personal saved routes.',
    position: 'bottom',
    icon: '📂'
  },
  {
    targetId: 'tour-routes-search',
    title: 'Find a Ride',
    description: 'Looking for a specific trail or region? Use this search bar to filter the list instantly.',
    position: 'bottom',
    icon: '🔍'
  },
  {
    targetId: 'tour-routes-create',
    title: 'Create Your Own',
    description: 'Map out a brand new route, set waypoints, and save it to your personal collection.',
    position: 'left',
    icon: '✨'
  }
];

export const communityTour = [
  {
    targetId: 'tour-community-tabs',
    title: 'Your Network',
    description: 'Switch between your active crews, find new groups to join, or access the local stolen bike registry.',
    position: 'bottom',
    icon: '👥'
  },
  {
    targetId: 'tour-community-group',
    title: 'Group Dashboard',
    description: 'Manage your crew from here. See upcoming rides, active members, and live territory battles at a glance.',
    position: 'bottom',
    icon: '⚔️'
  },
  {
    targetId: 'tour-community-theft-tab',
    title: 'Theft Alerts',
    description: 'Tap here to check for recently stolen bikes in your area or instantly report your own bike missing.',
    position: 'bottom',
    icon: '🚨'
  }
];