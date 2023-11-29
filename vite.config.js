import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

//git 레포지토리 네임으로
const base = process.env.NODE_ENV === 'production' ? '/e-book/' : '/';

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

