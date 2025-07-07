// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: ['@pinia/nuxt'],
	app: {
		head: {
			title: 'ai interface FREE!',
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: '',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
				},
			],
		},
	},
	css: ['~/assets/styles/main.scss'],
	alias: {
		'@components': '/components',
		'@utils': '/utils',
		'@styles': '/assets/styles',
	},
})
