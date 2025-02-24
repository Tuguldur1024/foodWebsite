import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images:{remotePatterns: [{hostname: "*"}]},
env:{
    NEXT_PUBLIC_MONGODB_URI:process.env.NEXT_PUBLIC_MONGODB_URI
}
};

export default nextConfig;


