import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build(),
    devServer({
      entry: 'src/index.tsx',
      exclude: [
        /.*\.css$/,
        /.*\.js$/,
        /.*\.ts$/,
        /.*\.jsx$/,
        /.*\.tsx$/,
        /.*\.png$/,
        /.*\.jpg$/,
        /.*\.svg$/,
        /.*\.ico$/,
        /.*\.woff2?$/,
        /^\/@.+$/,
        /^\/node_modules\/.*/,
        /^\/favicon\.ico$/,
      ],
    })
  ]
})
