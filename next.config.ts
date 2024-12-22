const nextConfig: import('next').NextConfig = {
    output: 'export',
    basePath: '/weather-app-next-js',
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
