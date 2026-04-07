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
					href: 'https://github.com/Intelligroup/docs'
				},
				{
					icon: 'linkedin',
					label: 'LinkedIn',
					href: 'https://www.linkedin.com/company/intelligroup-automatizacion-negocio/',
				},
			],
			sidebar: [
				{
					label: 'IntelliVoice',
					items: [
						{ slug: 'intellivoice/home' },
						{
							label: 'Mi negocio',
							items: [
								{ slug: 'intellivoice/workspace/general' },
								{ slug: 'intellivoice/workspace/knowledge' },
								{ slug: 'intellivoice/workspace/billing' },
							],
						},
						{
							label: 'Agente',
							items: [
								{ slug: 'intellivoice/agent/reports' },
								{ slug: 'intellivoice/agent/tasks' },
								{ slug: 'intellivoice/agent/calls' },
								{ slug: 'intellivoice/agent/settings' },
							],
						},
						{
							label: 'Herramientas',
							items: [
								{ slug: 'intellivoice/tools/modules' }
							],
						},
					],
				},
			],
		}),
	]
});