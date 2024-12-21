const nextConfig: import('next').NextConfig = {
    output: 'export',
    basePath: '/weather-app',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'openweathermap.org',
            },
        ],
    },
};

module.exports = nextConfig;
