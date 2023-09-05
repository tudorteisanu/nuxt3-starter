import { defineNuxtConfig } from 'nuxt/config';
import i18nConfig from './config/i18n.config';
import runtimeConfig from './config/runtime.config';
import viteConfig from './config/vite.config';
import appConfig from './config/app.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig,
	app: appConfig,
	vite: viteConfig,
	i18n: i18nConfig,
	ssr: true,
	telemetry: false,
	devtools: { enabled: true },
	components: [{
		path: '~/components',
		pathPrefix: false,
	}],
	imports: {
		dirs: [
			'composables',
			// ... or scan modules nested one level deep with a specific name and file extension
			'composables/*/index.{ts,js,mjs,mts}',
			// ... or scan all modules within given directory
			'composables/**',
		],
	},
	css: [
		'@/assets/scss/app.scss',
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
	],
	build: {
		transpile: ['vuetify'],
	},
	modules: ['@nuxtjs/i18n'],
});
