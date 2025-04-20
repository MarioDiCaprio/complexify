import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config) => {
        // exclude fs from build
        config.externals['fs'] = 'fs';

        // add GLSLify loader rules
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'glslify-loader']
        });

        return config;
    },
    experimental: {
        turbo: {
            rules: {
                // loader for GLSL files
                '*.glsl': {
                    loaders: ['raw-loader', 'glslify-loader'],
                    as: '*.js'
                }
            },
        }
    }
};

export default nextConfig;
