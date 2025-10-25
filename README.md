# AI Research Engineer Portfolio

A compact, researcher-focused portfolio website built with React and Vite.

## Features

- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎯 **Compact & Professional** - Dense, information-rich layout optimized for academic/research presentation
- 📐 **Collapsible Sidebar** - Space-efficient navigation with full/collapsed modes
- 📝 **Research Blog** - Showcase technical writing and research updates
- 🔬 **Projects Gallery** - Display ML/AI projects with detailed descriptions
- ⚡ **Fast & Modern** - Built with Vite for optimal performance
- 🔄 **Easy Content Management** - All content stored in separate data files

## Project Structure

```
my-page/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Top navigation header
│   │   ├── Sidebar.jsx      # Collapsible sidebar navigation
│   │   └── Layout.jsx       # Main layout wrapper
│   ├── pages/               # Page components
│   │   ├── About.jsx        # About page
│   │   ├── Blogs.jsx        # Blog listing page
│   │   ├── BlogDetail.jsx   # Individual blog post page
│   │   ├── Projects.jsx     # Projects listing page
│   │   └── ProjectDetail.jsx # Individual project page
│   ├── data/                # Content data files
│   │   ├── profile.js       # Your profile information
│   │   ├── blogs.js         # Blog posts data
│   │   └── projects.js      # Projects data
│   ├── App.jsx              # Main app component with routing
│   └── main.jsx             # Entry point
├── index.html
└── package.json
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customizing Content

### Profile Information

Edit `src/data/profile.js` to update:

- Your name and title
- Avatar image
- Bio/about section
- Skills
- Contact links (email, GitHub, LinkedIn, Twitter)

### Adding Blog Posts

Edit `src/data/blogs.js` to add or modify blog posts. Each blog post includes:

- `id` - Unique identifier
- `title` - Blog post title
- `date` - Publication date
- `excerpt` - Short description shown on listing page
- `content` - Full HTML content of the blog post
- `tags` - Array of tags/topics

### Adding Projects

Edit `src/data/projects.js` to add or modify projects. Each project includes:

- `id` - Unique identifier
- `title` - Project name
- `category` - Project category/type
- `year` - Year completed
- `thumbnail` - Image URL for project thumbnail
- `description` - Short description
- `fullDescription` - Detailed HTML content
- `tags` - Array of technologies used
- `links` - Demo and GitHub repository links

## Styling

The project uses vanilla CSS with a minimal, modern design system:

- **Primary Color**: Indigo (#4F46E5)
- **Typography**: System fonts for optimal performance
- **Layout**: Flexbox and CSS Grid
- **Responsive**: Mobile-first approach

All component styles are in their respective CSS files located next to the component files.

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **Vanilla CSS** - Styling (no CSS frameworks)

## License

Feel free to use this template for your own portfolio!
