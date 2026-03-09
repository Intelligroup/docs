// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Intelligroup',
			logo: {
				light: './src/assets/logo_dark.png',
				dark: './src/assets/logo_white.png',
				replacesTitle: true,
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Intelligroup/docs' },
				{
					icon: 'linkedin',
					label: 'LinkedIn',
					href: 'https://www.linkedin.com/company/intelligroup-automatizacion-negocio/',
				},
			],
			sidebar: [
				{
					label: 'IntelliVoice',
					autogenerate: { directory: 'intellivoice' },
				}
			],
		}),
	],
});
