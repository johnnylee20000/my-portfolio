# How to Add Pictures to Your Website

This guide explains how to add images to your Next.js portfolio website.

## 📁 Where to Put Your Images

All images should be placed in the `public/images/` folder. This folder is already created for you.

### Folder Structure:
```
my-portfolio/
  └── public/
      └── images/
          ├── profile.jpg      (Your profile picture)
          ├── about.jpg        (About section image)
          ├── project1.jpg     (First project image)
          ├── project2.jpg     (Second project image)
          └── project3.jpg     (Third project image)
```

## 🖼️ Adding Images to Different Sections

### 1. Profile Picture (Hero Section)

1. Add your profile picture to `public/images/profile.jpg`
2. Open `src/components/Hero.tsx`
3. Find the commented Image component (around line 50)
4. Uncomment it by removing the `/*` and `*/` around it
5. Remove or comment out the placeholder gradient div

**Example:**
```tsx
<Image
  src="/images/profile.jpg"
  alt="Johnny-Lee Treavajo"
  fill
  className="object-cover"
  priority
/>
```

### 2. About Section Image

1. Add your about image to `public/images/about.jpg`
2. Open `src/components/About.tsx`
3. Find the commented Image component (around line 30)
4. Uncomment it
5. Remove or comment out the placeholder gradient div

**Example:**
```tsx
<Image
  src="/images/about.jpg"
  alt="About Johnny-Lee Treavajo"
  fill
  className="object-cover"
/>
```

### 3. Project Images

1. Add your project images to:
   - `public/images/project1.jpg`
   - `public/images/project2.jpg`
   - `public/images/project3.jpg`

2. The images will automatically be used! The code is already set up to use them.

3. If you want to change which image goes with which project, edit `src/components/Projects.tsx` and update the `imagePath` property for each project.

**Example:**
```tsx
{
  title: 'E-Commerce Platform',
  imagePath: '/images/project1.jpg', // Change this path
  // ... rest of project data
}
```

## 📝 Image Requirements

### Recommended Image Sizes:
- **Profile Picture**: 400x400 pixels (square, 1:1 ratio)
- **About Image**: 800x600 pixels (4:3 ratio)
- **Project Images**: 1200x800 pixels (3:2 ratio)

### Supported Formats:
- `.jpg` / `.jpeg`
- `.png`
- `.webp` (recommended for better performance)

### Tips:
- **Optimize your images** before uploading to reduce file size
- Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
- Keep file sizes under 500KB for better loading speed
- Use `.webp` format for best performance

## 🎨 Using External Images

If you want to use images from external URLs (like Unsplash, your own CDN, etc.):

1. Update `next.config.mjs` to allow external image domains:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
}

export default nextConfig
```

2. Then use the external URL in your Image component:

```tsx
<Image
  src="https://example.com/image.jpg"
  alt="Description"
  width={400}
  height={400}
/>
```

## 🔧 Troubleshooting

### Image not showing?
- ✅ Check that the file is in `public/images/` folder
- ✅ Verify the filename matches exactly (case-sensitive)
- ✅ Make sure you uncommented the Image component
- ✅ Check the browser console for errors

### Image looks stretched?
- ✅ Use `object-cover` class (already included)
- ✅ Ensure your image has the right aspect ratio
- ✅ Consider cropping/resizing your image to match the container

### Build errors?
- ✅ Make sure all image paths start with `/images/`
- ✅ Verify image files exist before building
- ✅ Check that Image component is imported: `import Image from 'next/image'`

## 📚 Next.js Image Component Benefits

The Next.js `Image` component automatically:
- ✅ Optimizes images for different screen sizes
- ✅ Lazy loads images (loads when needed)
- ✅ Prevents layout shift
- ✅ Provides better performance

## 🚀 Quick Start

1. **Add your images** to `public/images/` folder
2. **Uncomment the Image components** in the relevant files
3. **Remove placeholder gradients** (optional)
4. **Test locally** with `npm run dev`
5. **Commit and push** your changes

That's it! Your images will now appear on your website.

