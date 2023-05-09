import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/" : "./",
  resolve: {
    alias: [//配置别名
      { find: '@', replacement: path.resolve(__dirname, './src') }
    ]
  },
  plugins: [react()],
}))
