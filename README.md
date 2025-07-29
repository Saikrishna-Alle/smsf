# SMS Pro - Student Management System Website

A dynamic, animated, and theme-switchable home page for an SMS (Student Management System) business website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

### ✨ Core Functionality
- **Dynamic Theme Switching**: Seamless dark/light theme toggle with localStorage persistence
- **Smooth Animations**: Professional animations using Framer Motion
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI/UX**: Vibrant, colorful design with professional aesthetics

### 🎨 Design Elements
- **Vibrant Color Palette**: Rich gradients and dynamic color schemes
- **Professional Animations**: Entrance animations, hover effects, and scroll-triggered animations
- **Theme Adaptation**: Every element adapts perfectly to both light and dark themes
- **Interactive Elements**: Hover effects, scale animations, and smooth transitions

### 📱 Sections Included
1. **Navigation Bar**: Fixed navbar with theme toggle and responsive design
2. **Hero Section**: Eye-catching hero with animated background elements
3. **Who We Serve**: Target audience cards with staggered animations
4. **Key Features**: Feature highlights with gradient backgrounds
5. **Trust & Security**: Security-focused section with trust indicators
6. **Call to Action**: Final engagement section with prominent CTAs
7. **Footer**: Comprehensive footer with links and social media

## 🛠️ Technology Stack

- **React 19**: Latest React with functional components and hooks
- **Tailwind CSS 4**: Utility-first CSS framework with custom animations
- **Framer Motion**: Professional animation library
- **Vite**: Fast build tool and development server

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smsf
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Theme System
- **Automatic Detection**: Detects system theme preference
- **Manual Toggle**: Click the sun/moon icon in the navbar
- **Persistence**: Theme choice saved in localStorage
- **Smooth Transitions**: All elements transition smoothly between themes

### Animation System
- **Entrance Animations**: Elements fade in and slide up on scroll
- **Hover Effects**: Interactive elements scale and glow on hover
- **Staggered Animations**: Cards animate in sequence for visual appeal
- **Scroll-Triggered**: Animations trigger when elements enter viewport

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive breakpoints for tablets
- **Desktop Experience**: Full-featured desktop experience
- **Touch-Friendly**: All interactive elements are touch-optimized

## 🎨 Design Philosophy

### Color Scheme
- **Light Theme**: Vibrant blues, purples, pinks, and yellows
- **Dark Theme**: Deep, rich dark tones with vibrant accents
- **Gradients**: Multi-color gradients for visual depth
- **Contrast**: High contrast for accessibility

### Typography
- **Modern Sans-Serif**: Inter font family
- **Clear Hierarchy**: Varying font weights and sizes
- **Readable**: Optimized for all screen sizes
- **Accessible**: Proper contrast ratios

### Animation Principles
- **Subtle**: Professional animations that enhance UX
- **Performance**: Optimized for smooth 60fps animations
- **Purposeful**: Each animation serves a specific purpose
- **Consistent**: Unified animation timing and easing

## 📁 Project Structure

```
src/
├── components/
│   ├── HomePage.jsx          # Main page component
│   ├── Navbar.jsx           # Navigation with theme toggle
│   ├── HeroSection.jsx      # Hero section with CTAs
│   ├── TargetAudience.jsx   # Who we serve section
│   ├── FeatureHighlights.jsx # Key features showcase
│   ├── TrustSecurity.jsx    # Security and trust section
│   ├── CallToActionSection.jsx # Final CTA section
│   └── Footer.jsx           # Footer with links
├── contexts/
│   └── ThemeContext.jsx     # Theme management context
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
└── index.css               # Global styles
```

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `HomePage.jsx`
3. Follow the existing animation patterns
4. Ensure theme compatibility

### Modifying Colors
1. Update Tailwind config in `tailwind.config.js`
2. Modify component color classes
3. Test in both light and dark themes

### Adding Animations
1. Use Framer Motion components
2. Follow existing animation patterns
3. Ensure performance optimization
4. Test on different devices

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the GitHub repository.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
