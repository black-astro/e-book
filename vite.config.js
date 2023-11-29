import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// GitHub 사용자 이름과 리포지토리 이름에 맞게 수정하세요
const base = process.env.NODE_ENV === 'production' ? '/black-astro/' : '/';

export default defineConfig({  
  base, //git base
  plugins: [
    react(),
    svgr(),
  ],
  esbuild: {
    // loader: {
    //   '.js': 'jsx', // '.js' 파일을 'jsx'로 처리
    // },
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

