import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  //We added a server proxy to replace each occurrence of '/api' with our localhost server
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      },

    },
  },
  plugins: [react()],
})
