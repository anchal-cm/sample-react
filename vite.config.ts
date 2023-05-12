import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    proxy:{
      '/api':{
        changeOrigin:true,
        secure:false,
        target: "https://dummyjson.com",
        rewrite:(path) =>path.replace(/^\/api/,"")
      }
    }
  }
})
