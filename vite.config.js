import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/spree': {
        target: 'https://demo.spreecommerce.org',
        changeOrigin: true,
        secure: true,
        rewrite: path => path        
          .replace(/^\/spree/, '/api/v2/storefront')
      }
    }
  }
})
