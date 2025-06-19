# Bad Metronome: It Keeps the Beat

A simple, high-performance metronome app with tap tempo, audio-visual beat indicator and keyboard controls. Perfect for musicians and practice sessions. Initialize the tempo in hyperlinks by adding `?bpm=` with the desired BPM to the URL. For example, `https://badmetronome.com?bpm=120` will start the metronome at 120 BPM.

## Features

- **High-performance metronome** with precise timing
- **Tap tempo** functionality for easy BPM setting
- **Audio-visual beat indicator** with flashing animation
- **Keyboard controls** for hands-free operation
- **URL parameter support** - initialize tempo via `?bpm=120`
- **Progressive Web App** with offline support
- **Service Worker** for caching and performance
- **Responsive design** that works on all devices

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm type-check

# Linting
pnpm lint
pnpm lint:fix
```

## Production Deployment

### Build Process

The application is optimized for production with:

- **Code splitting** for optimal loading performance
- **Tree shaking** to eliminate unused code
- **Asset optimization** with compression and caching
- **Service Worker** for offline functionality
- **Conditional loading** of analytics (Speed Insights only in production)

### Deployment Options

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Netlify

```bash
# Build the project
pnpm build

# Deploy the dist folder to Netlify
```

#### Static Hosting

```bash
# Build the project
pnpm build

# Upload the contents of the dist folder to your hosting provider
```

### Environment Variables

- `VITE_*` - Vite environment variables
- `VERCEL_*` - Vercel-specific variables (auto-configured)

### Performance Optimizations

- **Lazy loading** of Speed Insights analytics
- **Service Worker** with intelligent caching strategies
- **Code splitting** for vendor, icons, and analytics
- **Asset optimization** with proper cache headers
- **Web Vitals** monitoring in development

## Usage

### Basic Controls

- **Space/Enter**: Start/Stop metronome
- **Escape**: Stop metronome
- **Arrow Keys**: Adjust BPM
  - Left/Right: ±5 BPM
  - Up/Down: ±1 BPM

### URL Parameters

Initialize the metronome with a specific BPM by adding `?bpm=` to the URL:

```
https://badmetronome.com?bpm=120
```

## Technical Details

### Architecture

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **FontAwesome** for icons
- **Service Worker** for PWA functionality

### Performance Features

- **Web Vitals** monitoring (LCP, FID, CLS)
- **Service Worker** caching strategies
- **Code splitting** and lazy loading
- **Asset optimization** and compression
- **Progressive Web App** capabilities

### Browser Support

- Modern browsers with ES2020+ support
- Service Worker support for offline functionality
- Progressive Web App features where available

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For issues and questions, please open an issue on GitHub.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
