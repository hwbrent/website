/** @type {import('next').NextConfig} */
const nextConfig = {
    // GitHub Pages is designed to host static files, which means we can publish only
    // HTML, CSS, JavaScript (and other static files) there. So we'll need to enable
    // static page generation in Next.js.
    // See: https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/#heading-step-2-configure-the-nextjs-build-process
    output: "export",  // <=== enables static exports
    reactStrictMode: true,

    // Github assigns a dedicated subdomain after my username. But this project is
    // published under the sub-path 'website'. Unfortunately, this will lead to issues
    // with missing images and styles.
    // By default, Next.js maps all static assets the domain. This means that the
    // favicon.ico file will be resolved to hwbrent.github.io/favicon.ico instead of
    // hwbrent.github.io/website/favicon.icon.
    // To fix this, we can set up a path prefix by adding basePath, like so:
    basePath: "/website",

    // For the 'Image' component from 'next/image', the optimisation feature isn't
    // compatible with the "output: 'export'"" setting, which is used for generating
    // a static site. This happens because Next.js's default Image optimization relies
    // on a server to handle requests, which isn't available in fully static exports.
    // This property avoids an error
    images: {
        unoptimized: true
    }
};

export default nextConfig;
