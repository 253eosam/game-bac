import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@src' : resolve( __dirname, './src')
    },
  },
  plugins: [
    vue(),
  ],
  build: {
    rollupOptions: {
			output: {
				dir: 'dist',
				entryFileNames: 'app-[name].js',
				assetFileNames: 'app-[name].css',
				chunkFileNames: "chunk-[name].js",
				manualChunks: undefined,
			}
		}
  },
})
