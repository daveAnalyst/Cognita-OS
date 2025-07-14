// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // This is the key line that fixes the error
    autoprefixer: {},
  },
};

export default config;