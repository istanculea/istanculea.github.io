**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Configuration

The application uses centralized configuration stored in `src/config/constants.ts`. You can override certain values using environment variables:

1. Copy `.env.example` to `.env.local`:
   ```sh
   cp .env.example .env.local
   ```

2. Update the values in `.env.local` as needed:
   - `VITE_PLAUSIBLE_DOMAIN`: Your Plausible analytics domain (optional)

For more configuration options, see `src/config/constants.ts`.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Testing

### Unit tests

```bash
npm run test:unit
```

### E2E tests (Playwright)

```bash
npm run test:e2e
```

Run everything:

```bash
npm test
```
