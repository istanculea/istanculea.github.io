# GitHub Copilot – Repository Instructions

## Goal
Maintain a fast, accessible, SEO-friendly portfolio website. Make small, reviewable PRs. Prefer minimal diffs.

## Site Intent
- Personal portfolio site: experience, skills, projects, contact.
- Priorities: performance, accessibility (a11y), clean UI, correctness, and privacy (no creepy trackers).

## Tech Stack (Current)
This repository uses:
- **Vite** (v5) - Build tool and dev server
- **React** (v18) - UI framework with React Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling (with shadcn/ui components)
- **Radix UI** - Accessible component primitives
- **Vitest** - Unit testing
- **Playwright** - E2E testing

**Do not introduce a new framework, CSS system, or build tool unless explicitly requested.**

## Hard Rules
- ❌ **Never commit secrets** (API keys, analytics tokens, emails with passwords, etc.).
- ❌ **Avoid heavy third-party scripts** (tracking, chat widgets) unless explicitly requested.
- ❌ **Keep dependencies minimal and pinned**; avoid adding packages "just because".
- ❌ **Do not reformat unrelated files or refactor broadly** - keep changes surgical and focused.
- ❌ **Never use `eval()`, `new Function()`, inline scripts, or CSP-violating code** - this site has a strict Content Security Policy.

## GitHub Pages Deployment (Critical)

### User Site Configuration
This is a **user site** (`istanculea.github.io`), which means:
- ✅ Base path is `/` (root) - NOT `/<repo>/`
- ✅ Uses `BrowserRouter` in React Router (no hash routing needed)
- ✅ Deployed from `dist` folder to GitHub Pages via GitHub Actions
- ✅ All assets must use relative paths or start with `/`

### Deployment Checklist
Before any deployment-related changes:
1. **Never add** a `base` config to `vite.config.ts` (user sites don't need it)
2. **Test locally**: `npm run build && npm run preview`
3. **Verify routing**: All routes must work without 404s
4. **Check assets**: Images, fonts, CSS must load from correct paths
5. **Review CSP**: Browser console should be clean (no CSP violations)

## Build & Development Commands

### Development
```bash
npm install      # Install dependencies (use for new clones)
npm ci           # Clean install (preferred for CI/CD)
npm run dev      # Start dev server on http://localhost:8080
```

### Testing
```bash
npm run lint           # ESLint checks
npm run check-csp      # Verify CSP compliance
npm run test:unit      # Run Vitest unit tests
npm run test:e2e       # Run Playwright E2E tests
npm test               # Run all tests
```

### Production Build
```bash
npm run build          # Build for production (output: dist/)
npm run preview        # Preview production build locally
```

## Content Security Policy (CSP)

This site uses a **strict CSP** defined in `index.html`. All code must comply.

### ❌ Prohibited
- `eval()` or `new Function()`
- Inline `<script>` tags (except type="module")
- String-based `setTimeout()` or `setInterval()`
- Inline event handlers (`onclick`, `onload`, etc.)

### ✅ Allowed
- External scripts from 'self'
- Inline styles (required for React and Tailwind)
- Fonts from `fonts.googleapis.com` and `fonts.gstatic.com`
- Images from 'self', data URIs, and https sources

### Validation
Always run `npm run check-csp` before committing. The script analyzes code for CSP violations.

## UX / UI Expectations
- ✅ **Keep layout consistent** across pages (use existing components from `src/components/ui`).
- ✅ **Mobile-first responsiveness** - test on small screens first.
- ✅ **Semantic HTML** - use `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.
- ✅ **Dark mode** - preserve existing theme behavior with `next-themes`; don't break contrast.
- ✅ **Use shadcn/ui components** - leverage existing Radix UI primitives instead of building from scratch.

## Accessibility (Must-Have)

### Semantic Structure
- ✅ Heading order: `<h1>` → `<h2>` → `<h3>` (no skipping levels)
- ✅ Landmark elements: `<nav>`, `<main>`, `<aside>`, `<footer>`
- ✅ Lists for navigation: `<ul>` / `<ol>` with `<li>`

### Keyboard Navigation
- ✅ All interactive elements must be keyboard accessible
- ✅ Logical tab order (use `tabIndex` only when necessary)
- ✅ Visible focus indicators (don't remove outline styles)
- ✅ Escape key closes modals/dialogs
- ✅ Arrow keys for navigation menus (if applicable)

### Images & Media
- ✅ **Meaningful images**: descriptive `alt` text
- ✅ **Decorative images**: empty `alt=""` (not missing)
- ✅ **Icons**: include `aria-label` if standalone (no text)

### Forms
- ✅ Every `<input>` needs a `<label>` (visible or `aria-label`)
- ✅ Error messages must be associated via `aria-describedby`
- ✅ Required fields marked with `aria-required="true"` or `required`

### Color & Contrast
- ✅ **WCAG AA minimum**: 4.5:1 for normal text, 3:1 for large text
- ✅ Don't rely on color alone to convey information
- ✅ Test dark mode for sufficient contrast

### Testing
Use Playwright's axe-core integration to catch accessibility issues:
```bash
npm run test:e2e
```

## SEO (Must-Have)

### Meta Tags (Per Page/Route)
Each page or route must have:
```tsx
<Helmet>
  <title>Page Title | Your Name</title>
  <meta name="description" content="Unique description for this page" />
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Description for social sharing" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://istanculea.github.io/about" />
  <meta property="og:image" content="https://istanculea.github.io/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
```

### Best Practices
- ✅ **Unique `<title>`** for every page (50-60 characters)
- ✅ **Unique meta description** (150-160 characters)
- ✅ **Canonical URL** if needed: `<link rel="canonical" href="..." />`
- ✅ **Open Graph** tags for social media sharing
- ✅ **Twitter Cards** for Twitter sharing
- ✅ **Structured data** (JSON-LD) for rich snippets (optional but recommended)

### Files
- ✅ `public/robots.txt` - controls search engine crawling
- ✅ `public/sitemap.xml` - list of all pages (update when adding routes)
- ✅ `public/favicon.ico` and related icons

## Performance (Must-Have)

### Images
- ✅ **Optimize images**: use WebP/AVIF when possible, with fallbacks
- ✅ **Lazy load**: `loading="lazy"` for below-the-fold images
- ✅ **Responsive images**: `<picture>` with multiple sources or `srcset`
- ✅ **Dimensions**: always specify `width` and `height` to prevent layout shift

### JavaScript
- ✅ **Code splitting**: Vite handles this automatically (see `vite.config.ts` manualChunks)
- ✅ **Lazy load routes**: use React `lazy()` for route components
- ✅ **Tree shaking**: import only what you use (`import { Button } from './ui/button'`)
- ✅ **Avoid large bundles**: check bundle size with `npm run build`

### CSS
- ✅ **Tailwind purging**: configured automatically (only used classes in prod)
- ✅ **Critical CSS**: inline critical styles if needed
- ✅ **Minimize `@apply`**: prefer utility classes for better purging

### Fonts
- ✅ **System fonts first**: Tailwind uses system font stack by default
- ✅ **Google Fonts**: use `font-display: swap` to prevent FOIT
- ✅ **Subset fonts**: load only needed characters/weights

### Lighthouse Score
Aim for 90+ in all categories:
- Performance
- Accessibility
- Best Practices
- SEO

### Monitoring
- Test locally: `npm run build && npm run preview`
- Check bundle size warnings during build
- Use Chrome DevTools Lighthouse for audits

## Content Guidance (Portfolio-Specific)

### Accuracy
- ✅ **Keep claims accurate** - don't invent experience/skills.
- ✅ **Quantified impact** - use metrics when editing experience bullets (e.g., "Reduced load time by 40%").

### Projects Section
Each project should include:
- **Stack**: Technologies used (e.g., "React, TypeScript, Tailwind CSS")
- **Role**: Your specific contribution (e.g., "Lead Developer", "Solo Project")
- **What you built**: Brief description (2-3 sentences)
- **Outcome**: Result or impact (e.g., "Deployed to 10K users", "Won hackathon")

### Skills Section
- ✅ **Map to roles**: Organize by category (e.g., Cloud/DevOps/SRE, Frontend, Backend)
- ❌ **Not buzzwords**: Avoid listing "Agile, Scrum, Team Player" - focus on technical skills

### Example Structure
```tsx
// Good
<ProjectCard
  title="E-commerce Platform"
  stack={["React", "Node.js", "PostgreSQL"]}
  role="Full Stack Developer"
  description="Built a scalable e-commerce platform with real-time inventory management."
  outcome="Processed 50K+ orders in first 6 months"
  link="https://github.com/user/project"
/>

// Bad (vague, no metrics)
<ProjectCard
  title="Cool App"
  description="Made an app"
/>
```

## Code Quality & Style

### TypeScript
- ✅ **Strict mode**: `"strict": true` in `tsconfig.json`
- ✅ **Avoid `any`**: use proper types or `unknown`
- ✅ **Interfaces over types**: prefer `interface` for object shapes
- ✅ **Export types**: use `export type` for type-only exports

### React
- ✅ **Functional components**: use hooks, not class components
- ✅ **Props interfaces**: define explicit prop types
- ✅ **Key props**: always provide stable keys in lists
- ✅ **Effect cleanup**: return cleanup functions in `useEffect`
- ✅ **Memoization**: use `useMemo`/`useCallback` for expensive computations, not everywhere

### Tailwind CSS
- ✅ **Utility-first**: prefer utilities over custom CSS
- ✅ **Responsive modifiers**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- ✅ **Dark mode**: use `dark:` prefix for dark mode styles
- ✅ **Component variants**: use `class-variance-authority` for complex components

### Comments
- ✅ **Only when necessary**: code should be self-documenting
- ✅ **Match existing style**: look at other comments in the file
- ✅ **Explain "why", not "what"**: the code shows what, comments explain reasoning

### File Organization
```
src/
├── components/
│   ├── ui/          # shadcn/ui components (Button, Card, etc.)
│   └── ...          # Custom components
├── pages/           # Route components (Home, About, Projects, etc.)
├── lib/             # Utilities and helpers
├── hooks/           # Custom React hooks
└── config/          # Configuration files (constants.ts)
```

## Testing & Quality Gates

### Before Committing
1. ✅ **Lint**: `npm run lint` must pass
2. ✅ **CSP check**: `npm run check-csp` must pass
3. ✅ **Build**: `npm run build` must succeed
4. ✅ **Unit tests**: `npm run test:unit` (if applicable)
5. ✅ **E2E tests**: `npm run test:e2e` (if applicable)

### CI Checks (GitHub Actions)
The deploy workflow runs:
1. ESLint
2. CSP compliance check
3. Production build
4. Deployment to GitHub Pages

**Do not break CI.** All checks must pass before merging.

### Accessibility Tests
E2E tests include axe-core checks:
```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations', async ({ page }) => {
  await page.goto('/');
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
```

Add similar tests when creating new pages.

### Manual Checks
When changing routing or links:
- ✅ **No broken internal links** (click through all navigation)
- ✅ **No missing assets** (check Network tab for 404s)
- ✅ **Mobile viewport** (test on Chrome DevTools mobile view)
- ✅ **Dark mode toggle** (ensure it works and looks good)

## Documentation

### When to Update README.md
Update `README.md` when changing:
- Dev commands or scripts
- Environment variables
- Dependencies (major versions)
- Project structure

### When to Update DEPLOYMENT.md
Update `DEPLOYMENT.md` when changing:
- Build output path (currently `dist/`)
- Deployment workflow
- Base path configuration
- Environment variables used in build

### Code Comments
- Update comments when changing behavior
- Remove outdated comments
- Add JSDoc comments for exported functions/components

## PR Hygiene

### PR Title
- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`
- Be specific: "feat: add contact form validation" not "update form"

### PR Description
Include:
1. **What**: Brief description of changes
2. **Why**: Reason for the change (link to issue if applicable)
3. **How to verify**: Step-by-step instructions
   - Commands to run
   - What to check (desktop + mobile)
   - Expected behavior

### Example PR Description
```markdown
## What
Added dark mode toggle to the navigation bar.

## Why
Improves user experience by allowing theme preference selection.

## How to Verify
1. Run `npm run dev`
2. Open http://localhost:8080
3. Click the moon/sun icon in the top-right corner
4. Verify:
   - Theme changes from light to dark
   - Choice persists on page reload
   - All text remains readable (good contrast)
   - Works on mobile viewport (Chrome DevTools)

Desktop: ✅ Tested
Mobile: ✅ Tested
```

### Keep PRs Small
- ✅ **Single concern**: one feature or fix per PR
- ✅ **Split large changes**: break UI rewrites into multiple PRs
- ✅ **Reviewable diffs**: aim for < 500 lines changed
- ❌ **Avoid mixing**: don't combine refactoring with new features

## Troubleshooting

### Build Fails
1. Run `npm run build` locally
2. Check TypeScript errors: `npm run lint`
3. Verify dependencies: `npm ci`
4. Check GitHub Actions logs for details

### Blank Page After Deploy
1. Check browser console for errors
2. Verify base path is correct (should be `/` for user sites)
3. Check Network tab for 404s on assets
4. Test routing: manually navigate to `/about`, `/projects`, etc.

### CSP Violations
1. Check browser console for CSP error messages
2. Run `npm run check-csp` to identify problematic code
3. Avoid `eval()`, inline scripts, and string-based event handlers
4. Use external scripts or module scripts only

### Performance Issues
1. Run Lighthouse audit in Chrome DevTools
2. Check bundle size: look for large chunks in build output
3. Optimize images: use WebP, compress, lazy load
4. Profile with React DevTools: find expensive renders

## Resources
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Content Security Policy (CSP) Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Remember: Make small, surgical changes. Test locally before pushing. Keep the site fast, accessible, and privacy-respecting.**
