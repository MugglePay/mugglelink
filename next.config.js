const nextConfig = {
    output: 'export',
    externals: ['pino-pretty'],
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
