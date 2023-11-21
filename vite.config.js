import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({  
  plugins: [
    react(),
  ],
  esbuild: {
    loader: {
      '.js': 'jsx', // '.js' 파일을 'jsx'로 처리
    },
  },
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

