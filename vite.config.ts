import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      cache: false
    }),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      '/1418426-0-default': {
        target: 'https://mock.apifox.cn/m1/',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
