# Claude Development Guidelines

This repository contains a Next.js personal portfolio website. Here are the development guidelines for working with this project:

## Development Setup

0. **Node.js**: Requires Node.js 20.9+ (CI uses 22, see `.github/workflows/deploy.yml`)
1. **Dependencies**: Run `npm install` to install all required packages
2. **Development server**: Use `npm run dev` to start the development server
3. **Build**: Use `npm run build` to create a production build (static export to `out/`)
4. **Lint**: Use `npm run lint` to check code quality (Next.js 16で`next lint`が廃止されたためESLint CLIを直接呼ぶ)

## Key Files

- `src/app/page.tsx` - Main portfolio page with profile configuration
- `src/app/layout.tsx` - Layout component with metadata
- `src/components/BrandIcons.tsx` - GitHub/LinkedInのブランドアイコン(lucide-react v1で削除されたためインラインSVGで保持)
- `public/images/` - Static images directory
- `README.md` - Project documentation

## Customization Guide

### Profile Setup
The main profile configuration is in `src/app/page.tsx`. Update the `profile` object with:
- Personal information (name, title, description)
- Contact details and location
- Social media links
- Skills and experience

### Image Setup
1. Add your profile image to `public/images/`
2. Update the `profile.avatar` path in `page.tsx`
3. Replace placeholder images as needed

## Testing Pull Requests

This project is configured to work with GitHub's pull request system. To test PR creation:

1. Make changes on a feature branch
2. Ensure changes are committed and pushed
3. Create a pull request from your branch to `main`

## Code Quality

- Use TypeScript for type safety
- Follow React/Next.js best practices
- Maintain responsive design with Tailwind CSS
- Use CSS animations (defined in `globals.css`) consistently; do not add animation libraries such as Framer Motion (kept out to minimize bundle size)

## Deployment

This project is configured for GitHub Pages deployment:
- Push to `main` branch for automatic deployment
- Ensure `next.config.ts` is properly configured for static export
- Static files are generated in the `out` directory