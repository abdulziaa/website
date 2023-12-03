/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turn off React StrictMode for now, as react-aria (used by Plasmic)
  // has some troubles with it. See
  // https://github.com/adobe/react-spectrum/labels/strict%20mode
  reactStrictMode: false,

  // Specify the directory where the export will be placed
  // Adjust the value based on your project structure
  // By default, it will be placed in the 'out' directory
  distDir: 'out',
};

module.exports = nextConfig;
