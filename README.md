# SkillSwap Hub Landing Page

A modern, responsive landing page for SkillSwap Hub, a platform for trading skills and learning new talents for free.

## Features

- **Clean and Modern Design**: Vibrant accent colors with a welcoming atmosphere and elegant footer styling.
- **Hero Section**: Engaging headline and value proposition with call-to-action buttons.
- **How It Works**: Step-by-step process explanation with consistent spacing and layout.
- **Featured Skills**: Showcase of popular skills available on the platform.
- **Testimonials**: User stories emphasizing growth and connections.
- **Community Section**: Previews of forum and event calendar with enhanced contrast.
- **Sign-Up Form**: Modern two-column layout with skill category selection and intuitive design.
- **Modern Footer**: Professional multi-column layout with brand section, organized links grid, and social integration.
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile with optimized spacing and layout.
- **Smooth Animations**: Enhanced section animations with staggered timing, multiple animation types (fade, slide, scale), and smooth easing.
- **Improved Mobile Menu**: Lightweight, elegant hamburger icon with proper positioning and smooth transitions.
- **Mobile Optimized**: Chat integration placeholders, event RSVP, and profile management notes.

## How to View

1. Open `index.html` in your web browser.
2. For a better development experience, use a local server:
   - Install a simple HTTP server (e.g., via Node.js: `npx http-server`)
   - Or use VS Code's Live Server extension.

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox for layouts)
- Vanilla JavaScript

## Customization

- **Colors**: CSS variables defined in `styles.css` for easy theming
- **Spacing**: Standardized padding system with `4rem 4rem` section padding for consistency
- **Typography**: Responsive font sizes using `clamp()` for fluid scaling
- **Animations**: Enhanced with multiple animation types (fadeInUp, slideInUp, slideInDown, scaleIn) with customizable delays and easing functions
- **Content**: Update directly in `index.html`
- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, 1024px, and 1200px

## Animation Details

The landing page includes sophisticated scroll-triggered animations:

- **Fade & Slide**: Elements fade in while moving up/down/left/right with 0.9s smooth easing
- **Scale Effects**: Components scale from 0.85 to 1.0 for gentle zoom effects
- **Staggered Delays**: Child elements animate with 80ms intervals (0.05s to 0.55s) for cascading sequences
- **Intersection Observer**: Animations trigger when elements enter viewport with -80px rootMargin for early triggering

## Rationale

SkillSwap Hub addresses the demand for affordable, flexible learning by fostering a collaborative community focused on shared knowledge. This landing page creates an inviting experience that encourages user engagement and organic growth.

## Troubleshooting

- If styles don't load, ensure `styles.css` is in the same directory as `index.html`.
- For mobile testing, use browser developer tools to simulate different devices (480px, 768px, 1024px).
- If scroll animations don't trigger, check that elements have the `.animate-on-scroll` class in HTML.
- For smooth animations, ensure JavaScript is enabled in your browser.
- Mobile menu may need adjustment on very large or very small screens - test with actual devices for best results.
- To adjust animation timing, modify the `transition` property in `.animate-on-scroll` CSS class or the stagger delays.

## Recent Updates

- **Enhanced Section Animations**: Improved scroll animations with smoother easing (0.9s), extended slide distances (60px), and variable stagger delays (0.05s-0.55s) for more organic cascading effects
- **Lightweight Mobile Menu**: Streamlined hamburger icon with transparent background, 2px lines, and elegant styling that matches modern design standards
- **Mobile Menu Alignment**: Fixed hamburger menu and mobile navigation overlay positioning to align perfectly with header height across all responsive breakpoints (56px, 60px, 70px, 80px)
- **Improved Contrast**: Enhanced community stats section with better text visibility and card backgrounds for WCAG AA compliance
- **Modern Signup Section**: Redesigned with two-column layout featuring professional spacing and improved visual hierarchy
- **Professional Footer**: Multi-column grid layout with brand section, organized links (Product, Community, Company, Legal), social icons, and trust badges
- **Performance Optimizations**: Added CSS variable support for nth-child calculations and improved intersection observer rootMargin for better animation triggering

## License

See LICENSE file for details.
