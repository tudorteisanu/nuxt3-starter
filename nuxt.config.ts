// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	components: [{
		path: '~/components',
		pathPrefix: false,
	}],
	modules: [
	],
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
});
