import { version } from './package.json';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	devtools: { enabled: true },
	components: [{
		path: '~/components',
		pathPrefix: false,
	}],
	css: [
		'@/assets/scss/app.scss',
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
	],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
		css: {
			devSourcemap: true,
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/_variables.scss";',
				},
			},
		},
	},
	runtimeConfig: {
		public: {
			version,
		},
	},
	modules: ['@nuxtjs/i18n'],
	i18n: {
		baseUrl: 'http://localhost:3000',
		lazy: true,
		langDir: 'locales/',
		strategy: 'prefix_except_default',
		locales: [
			{
				code: 'en',
				iso: 'en-US',
				name: 'English(US)',
				file: 'en.ts',
			},
			{
				code: 'ru',
				iso: 'ru-RU',
				name: 'Russian',
				file: 'ru.ts',
			},
		],
		defaultLocale: 'en',
		vueI18n: {
			fallbackLocale: 'en',
			legacy: false,
		},
	},
});
