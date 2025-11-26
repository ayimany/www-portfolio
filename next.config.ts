import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactCompiler: true,
    async redirects() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.yourdomain.com/:path*',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
