import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

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
      imports: ['vue', 'vue-router'],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      eslintrc: {
        enabled: true // <-- this
      },
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),

    Components({
      dts: path.resolve(pathSrc, 'components.d.ts'),
      resolvers: [
        IconsResolver({
          enabledCollections: ['ep']
        }),
        ElementPlusResolver()
      ]
    }),

    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': pathSrc
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
      }
    }
  }
})
