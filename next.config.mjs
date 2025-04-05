/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Pehle se maujood experiments ko preserve karte hue layers ko enable karein
      config.experiments = {
        ...config.experiments,
        layers: true,
      };
      return config;
    },
  };
  
  export default nextConfig;
  