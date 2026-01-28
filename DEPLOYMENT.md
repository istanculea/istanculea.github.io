# Deployment Guide

## GitHub Pages Deployment

This portfolio website is configured for automatic deployment to GitHub Pages whenever changes are pushed to the `main` branch.

### Deployment Workflow

The `.github/workflows/deploy.yml` workflow handles automatic deployment:

1. **Build Stage**:
   - Checks out the code
   - Sets up Node.js 20
   - Installs dependencies with `npm ci`
   - Runs linting with `npm run lint`
   - Builds the production bundle with `npm run build`
   - Uploads the `dist` folder as a build artifact

2. **Deploy Stage**:
   - Downloads the build artifact
   - Deploys to GitHub Pages
   - Makes the site available at your GitHub Pages URL

### Manual Deployment

To manually trigger a deployment:

1. Go to the "Actions" tab in your GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch (usually `main`)
5. Click "Run workflow"

### GitHub Pages Configuration

Ensure your repository has GitHub Pages enabled:

1. Go to repository Settings
2. Navigate to Pages section
3. Source should be set to "GitHub Actions"
4. Your site will be available at: `https://[username].github.io/` or your custom domain

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain name
2. Configure DNS settings with your domain registrar:
   - For apex domain (example.com): Add A records pointing to GitHub's IPs
   - For www subdomain: Add CNAME record pointing to [username].github.io
3. Enable HTTPS in GitHub Pages settings

### Build Configuration

The build process uses Vite and includes:

- **TypeScript compilation**: Type-checked during build
- **CSS optimization**: Tailwind CSS purged and minified
- **Asset optimization**: Images and other assets are optimized
- **Code splitting**: JavaScript bundles are automatically split for optimal loading

### Content Security Policy (CSP)

This site uses a strict Content Security Policy defined in `index.html`:

```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; 
           script-src 'self'; 
           style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
           img-src 'self' data: https:; 
           font-src 'self' data: https://fonts.gstatic.com; 
           connect-src 'self' https:; 
           object-src 'none'; 
           base-uri 'self'; 
           form-action 'self';" />
```

**Important**: This CSP is strict and doesn't allow:
- `eval()` or `new Function()`
- Inline scripts (except modules)
- String-based `setTimeout()` or `setInterval()`

All code must be CSP-compliant. The `'unsafe-inline'` in `style-src` is required for React inline styles and Tailwind CSS.

### Troubleshooting

#### Blank Page After Deployment

If you see a blank page:

1. Check browser console for CSP violations
2. Verify all routes work with React Router's BrowserRouter
3. Check that all assets are loading correctly (check Network tab)
4. Ensure the `dist` folder was built correctly

#### Build Failures

If the build fails:

1. Run `npm run build` locally to reproduce the error
2. Check for TypeScript errors with `npm run lint`
3. Verify all dependencies are installed: `npm ci`
4. Check the Actions tab for detailed error logs

#### CSP Violations

If CSP errors appear:

1. Review the browser console for specific violations
2. Ensure no third-party scripts use `eval()` or similar functions
3. Update dependencies to CSP-compliant versions
4. Avoid inline scripts and event handlers

### Local Testing

Test the production build locally before deploying:

```bash
# Build the site
npm run build

# Preview the production build
npm run preview

# Visit http://localhost:4173
```

### Performance Optimization

The site is optimized for performance:

- ✅ Static asset caching
- ✅ Code splitting
- ✅ Image optimization
- ✅ CSS minification
- ✅ Tree shaking
- ✅ Lazy loading of components

### Monitoring

Consider adding monitoring tools:

- **Error tracking**: Sentry, LogRocket, or similar (integrated with ErrorBoundary)
- **Analytics**: Google Analytics, Plausible, or similar
- **Performance monitoring**: Lighthouse CI, WebPageTest

### Security

Security best practices implemented:

- ✅ Strict Content Security Policy
- ✅ HTTPS only (enforced by GitHub Pages)
- ✅ No inline scripts (except modules)
- ✅ Subresource Integrity (SRI) for CDN resources
- ✅ Permissions Policy set
- ✅ Referrer Policy set

### Continuous Integration

The workflow includes quality checks:

- ESLint for code quality
- TypeScript type checking
- Build verification
- Artifact validation

---

For more information:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
