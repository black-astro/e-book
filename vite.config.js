import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({  
  plugins: [react()],
  server: {
    port: 3031,
  },
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components" },
      { find: "@", replacement: "/src" },
    ],
  },
})

