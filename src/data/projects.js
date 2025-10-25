export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    year: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    description: "A modern e-commerce platform built with React and Node.js",
    fullDescription: `
      <h2>Project Overview</h2>
      <p>A full-stack e-commerce platform designed for small to medium-sized businesses. This project showcases modern web development practices and scalable architecture.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>User authentication and authorization</li>
        <li>Product catalog with advanced filtering</li>
        <li>Shopping cart and checkout process</li>
        <li>Payment integration with Stripe</li>
        <li>Admin dashboard for inventory management</li>
        <li>Responsive design for mobile and desktop</li>
      </ul>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Frontend:</strong> React, Redux, TailwindCSS</li>
        <li><strong>Backend:</strong> Node.js, Express, MongoDB</li>
        <li><strong>Payment:</strong> Stripe API</li>
        <li><strong>Deployment:</strong> Vercel (frontend), Railway (backend)</li>
      </ul>
      
      <h3>Challenges and Solutions</h3>
      <p>One of the main challenges was handling concurrent inventory updates. We implemented optimistic locking and transaction management to ensure data consistency.</p>
      
      <h3>Results</h3>
      <p>The platform successfully handles thousands of daily transactions with 99.9% uptime and sub-second page load times.</p>
    `,
    tags: ["React", "Node.js", "MongoDB", "E-Commerce"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile & Web",
    year: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    description: "A collaborative task management tool with real-time updates",
    fullDescription: `
      <h2>Project Overview</h2>
      <p>A task management application that helps teams collaborate effectively. Built with real-time synchronization and offline support.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Real-time collaboration with WebSockets</li>
        <li>Drag-and-drop task boards</li>
        <li>Offline mode with data synchronization</li>
        <li>Team workspace management</li>
        <li>File attachments and comments</li>
        <li>Advanced filtering and search</li>
      </ul>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Frontend:</strong> React, React Beautiful DnD, Socket.io-client</li>
        <li><strong>Backend:</strong> Node.js, Socket.io, PostgreSQL</li>
        <li><strong>Storage:</strong> AWS S3 for file uploads</li>
        <li><strong>Real-time:</strong> WebSocket connections</li>
      </ul>
      
      <h3>Technical Highlights</h3>
      <p>Implemented conflict resolution for concurrent edits using operational transformation. This ensures that changes from multiple users are merged correctly.</p>
      
      <h3>Impact</h3>
      <p>Used by over 50 teams with an average productivity increase of 30% reported by users.</p>
    `,
    tags: ["React", "WebSocket", "PostgreSQL", "Real-time"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Portfolio Design System",
    category: "Design System",
    year: "2023",
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    description:
      "A comprehensive design system for building consistent user interfaces",
    fullDescription: `
      <h2>Project Overview</h2>
      <p>A complete design system with reusable components, design tokens, and comprehensive documentation.</p>
      
      <h3>Components</h3>
      <ul>
        <li>30+ reusable UI components</li>
        <li>Consistent color palette and typography</li>
        <li>Accessibility-first design</li>
        <li>Dark mode support</li>
        <li>Interactive documentation with Storybook</li>
      </ul>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Framework:</strong> React with TypeScript</li>
        <li><strong>Styling:</strong> CSS-in-JS with Styled Components</li>
        <li><strong>Documentation:</strong> Storybook</li>
        <li><strong>Testing:</strong> Jest, React Testing Library</li>
      </ul>
      
      <h3>Design Principles</h3>
      <p>The system follows atomic design principles, building from atoms to molecules to organisms. Each component is fully tested and documented.</p>
      
      <h3>Adoption</h3>
      <p>Successfully adopted across 5 different projects, reducing development time by 40% and ensuring design consistency.</p>
    `,
    tags: ["Design System", "React", "TypeScript", "Storybook"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 4,
    title: "Weather Forecast Dashboard",
    category: "Data Visualization",
    year: "2023",
    thumbnail:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
    description:
      "An interactive weather dashboard with beautiful data visualizations",
    fullDescription: `
      <h2>Project Overview</h2>
      <p>A weather dashboard that presents meteorological data in an intuitive and visually appealing way.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>7-day weather forecast</li>
        <li>Hourly weather data visualization</li>
        <li>Interactive maps with weather layers</li>
        <li>Location search and favorites</li>
        <li>Severe weather alerts</li>
        <li>Historical weather data analysis</li>
      </ul>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Frontend:</strong> React, D3.js, Chart.js</li>
        <li><strong>Maps:</strong> Mapbox GL</li>
        <li><strong>API:</strong> OpenWeatherMap API</li>
        <li><strong>State Management:</strong> React Query</li>
      </ul>
      
      <h3>Data Visualization</h3>
      <p>Implemented custom D3.js visualizations for temperature trends, precipitation patterns, and wind data. The visualizations are responsive and interactive.</p>
      
      <h3>Performance</h3>
      <p>Optimized API calls with caching and lazy loading. The dashboard loads in under 2 seconds even on slower connections.</p>
    `,
    tags: ["React", "D3.js", "Data Viz", "API"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 5,
    title: "Blog CMS Platform",
    category: "Content Management",
    year: "2023",
    thumbnail:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    description:
      "A headless CMS for managing blog content with a modern editor",
    fullDescription: `
      <h2>Project Overview</h2>
      <p>A headless CMS built specifically for bloggers and content creators. Features a rich text editor and flexible content modeling.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Rich text editor with markdown support</li>
        <li>Custom content types and fields</li>
        <li>Media library with image optimization</li>
        <li>SEO optimization tools</li>
        <li>Multi-language support</li>
        <li>API-first architecture</li>
      </ul>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Frontend:</strong> React, Slate.js (editor)</li>
        <li><strong>Backend:</strong> Node.js, GraphQL</li>
        <li><strong>Database:</strong> PostgreSQL</li>
        <li><strong>Storage:</strong> Cloudinary for images</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The editor is built with Slate.js, providing a customizable and extensible rich text editing experience. The GraphQL API allows flexible content queries.</p>
      
      <h3>Usage</h3>
      <p>Currently powers 15+ active blogs with over 10,000 published articles.</p>
    `,
    tags: ["CMS", "GraphQL", "React", "Node.js"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 6,
    title: "Fitness Tracking Mobile App",
    category: "Mobile Application",
    year: "2022",
    thumbnail:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
    description: "A mobile app for tracking workouts and health metrics",
    fullDescription: `
      <h2>Project Overview</h2>
      <p>A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and health metrics.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Workout logging with exercise database</li>
        <li>Nutrition tracking and calorie counter</li>
        <li>Progress photos and measurements</li>
        <li>Custom workout plans</li>
        <li>Social features and challenges</li>
        <li>Wearable device integration</li>
      </ul>
      
      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Mobile:</strong> React Native</li>
        <li><strong>State:</strong> Redux Toolkit</li>
        <li><strong>Backend:</strong> Firebase</li>
        <li><strong>Storage:</strong> AsyncStorage for offline data</li>
      </ul>
      
      <h3>User Experience</h3>
      <p>Designed with a focus on quick workout logging. Users can log an entire workout in under 30 seconds.</p>
      
      <h3>Metrics</h3>
      <p>Over 5,000 downloads with a 4.5-star rating on app stores. Users report increased workout consistency.</p>
    `,
    tags: ["React Native", "Mobile", "Firebase", "Health"],
    links: {
      demo: "#",
      github: "#",
    },
  },
];
