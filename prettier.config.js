/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  tailwindFunctions: ['clsx', 'cn', 'twMerge'],
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
