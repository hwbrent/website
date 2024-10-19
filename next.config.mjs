/** @type {import('next').NextConfig} */
const nextConfig = {
    // GitHub Pages is designed to host static files, which means we can publish only
    // HTML, CSS, JavaScript (and other static files) there. So we'll need to enable
    // static page generation in Next.js.
    // See: https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/#heading-step-2-configure-the-nextjs-build-process
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
