/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React Strict Mode
    swcMinify: true, // Enable SWC-based minification for faster builds
  
    // Environment Variables
    env: {
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      NPS_API_KEY: process.env.NPS_API_KEY,
      WEATHER_API_KEY:process.env.WEATHER_API_KEY

    },
  
    // Custom Webpack Configuration
    webpack(config) {
      // Custom Webpack configuration goes here
      return config;
    },
  
    // Redirects
    async redirects() {
      return [
        {
          source: '/old-path',
          destination: '/new-path',
          permanent: true,
        },
      ];
    },
  
    // Rewrites
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: '/api/your-backend/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  
