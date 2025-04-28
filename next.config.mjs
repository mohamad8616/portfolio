/** @type {import('next').NextConfig} */
const nextConfig = {
  // This setting tells Next.js to export the app as static HTML/CSS/JS
  // It enables static exports for hosting on platforms like GitHub Pages
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
