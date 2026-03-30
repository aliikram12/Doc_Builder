import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate sourcemaps for production debugging (optional, disable for smaller bundles)
    sourcemap: false,
    // Minify with esbuild for faster builds
    minify: 'esbuild',
    // Chunk size warning limit
    chunkSizeWarningLimit: 600,
    // Rollup options for better optimization
    rollupOptions: {
      output: {
        // Manual chunks for better code splitting
        manualChunks: {
          'react-pdf': ['@react-pdf/renderer'],
          'lucide': ['lucide-react']
        }
      }
    }
  },
  // PostCSS config path
  css: {
    postcss: './postcss.config.cjs'
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', '@react-pdf/renderer', 'lucide-react']
  }
})
