import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		jsxFactory: 'h',
		jsxFragment: 'Fragment',
	},
  resolve: {
		alias: {
			vue: 'vue/dist/vue.esm-bundler.js',
			'~/': `${path.resolve(__dirname, 'src')}/`,
			'@/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
  plugins: [
		vue(),
    Layouts(),
    Components({
			dirs: ['src/components/*'],
			extensions: ['vue'],
			dts: true,
			directoryAsNamespace: true,
			include: [/\.vue$/, /\.vue\?vue/],
		}),
    Pages(),
		vueJsx(),
		VueI18nPlugin({
			// you need to set i18n resource including paths !
			include: path.resolve(__dirname, './src/locales/**'),
			strictMessage: false,
		}),
		Icons({ autoInstall: true }),
    AutoImport({
			imports: [
				'vue',
				'vue-router',
				'vue-i18n',
				'@vueuse/head',
				'@vueuse/core',
				{ pinia: ['storeToRefs'] },
			],
			dirs: [
				'./src/composables',
			],
			dts: true,
			eslintrc: {
				enabled: true,
			},
		}),
  ],
})
