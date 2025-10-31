# SkillSwap Hub Landing Page

A modern, responsive landing page for SkillSwap Hub, a platform for trading skills and learning new talents for free.

## Features

- **Clean and Modern Design**: Vibrant accent colors with a welcoming atmosphere and elegant footer styling.
- **Hero Section**: Engaging headline and value proposition with call-to-action buttons.
- **How It Works**: Step-by-step process explanation with consistent spacing and layout.
- **Featured Skills**: Showcase of popular skills available on the platform.
- **Testimonials**: User stories emphasizing growth and connections.
- **Community Section**: Previews of forum and event calendar.
- **Sign-Up Form**: Easy registration with skill category selection and floating card previews.
- **Modern Footer**: Glass-morphism design with left-aligned content, smooth hover animations, and proper card spacing.
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile with optimized spacing and layout.
- **Smooth Interactions**: Animated elements, floating cards, and hover effects for enhanced user experience.
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
- **Animations**: Smooth transitions and hover effects throughout
- **Content**: Update directly in `index.html`
- **Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, and 1024px

## Rationale

SkillSwap Hub addresses the demand for affordable, flexible learning by fostering a collaborative community focused on shared knowledge. This landing page creates an inviting experience that encourages user engagement and organic growth.

## Troubleshooting

- If styles don't load, ensure `styles.css` is in the same directory as `index.html`.
- For mobile testing, use browser developer tools to simulate different devices (480px, 768px, 1024px).
- JavaScript features are basic; expand as needed for full functionality.
- Floating cards are positioned to avoid overlap - check browser console for any CSS warnings.

## Recent Updates

- **Modern Footer Design**: Implemented glass-morphism effects with subtle blur and background transparency
- **Responsive Spacing**: Standardized section padding to `4rem 4rem` for visual consistency
- **Floating Card Layout**: Non-overlapping positioned cards with proper z-index layering and margin spacing
- **Mobile Signup Visual**: Flexbox-based responsive layout replacing outdated float properties
- **Footer Section Styling**: Left-aligned content with smooth hover animations and interactive elements

## License

See LICENSE file for details.
