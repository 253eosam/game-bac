import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      useCredentials: true,
      srcDir: '/assets',
      manifest: {
        name: 'game-bac',
        short_name: 'bac',
        description: 'Hello game bac',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-192x192.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/android-chrome-192x192.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    })
  ],
  build: {
    outDir: 'dist',
  }
})
