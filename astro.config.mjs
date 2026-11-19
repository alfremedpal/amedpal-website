// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://amedpal.com',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		routing: { prefixDefaultLocale: false }, // English at /, Spanish at /es/
	},
	integrations: [
		// Lists each page's language versions as hreflang alternates.
		sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es-MX' } } }),
	],
});
