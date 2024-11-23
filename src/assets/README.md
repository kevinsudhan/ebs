# Assets Directory Structure

This directory contains all the media assets for the Everyday Banking Solutions website.

## Directory Structure

- `/images`
  - `/logos` - Brand logos and icons
  - `/banners` - Hero banners and promotional images
  - `/icons` - UI icons and small graphics
  - `/cards` - Credit card images
  - `/backgrounds` - Background images and patterns
  - `/team` - Team member photos
  - `/partners` - Partner and client logos

## Image Guidelines

1. Recommended formats:
   - Use SVG for logos and icons
   - Use WebP/PNG for photos with transparency
   - Use JPEG for photographs
   - Use GIF for simple animations

2. Image sizes:
   - Logos: Max 200KB
   - Banners: Max 500KB
   - Icons: Max 50KB
   - Background images: Max 300KB

3. Naming convention:
   - Use lowercase
   - Use hyphens instead of spaces
   - Include dimensions if relevant
   - Example: `hero-banner-1920x1080.jpg`

## Usage

Import images in React components like this:
```jsx
import logo from '../assets/images/logos/bank-logo.svg';
```

Then use in your component:
```jsx
<img src={logo} alt="Bank Logo" />
```
