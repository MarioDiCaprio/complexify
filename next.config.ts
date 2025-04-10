import type { NextConfig } from "next";
import {load} from "signal-exit";

const nextConfig: NextConfig = {
    webpack: (config) => ({
        externals: Object.assign({}, config.externals, {
            fs: 'fs',
        }),
        module: Object.assign({}, config.module, {
            // loader for GLSL files
            rules: config.module.rules.concat([
                {
                    test: /\.(glsl|vs|fs|vert|frag)$/,
                    exclude: /node_modules/,
                    use: ['raw-loader', 'glslify-loader']
                }
            ]),
        }),
    }),
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
