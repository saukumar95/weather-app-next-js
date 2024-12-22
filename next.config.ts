const nextConfig: import('next').NextConfig = {
    output: 'export',
    basePath: '/weather-app-next-js',
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_WEATHER_KEY: process.env.NEXT_PUBLIC_WEATHER_KEY,
    },
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
