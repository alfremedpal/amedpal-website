// All page copy, per language. English is the source of truth; Spanish (es-MX)
// must match its shape (enforced by the `Dict` type).

export const languages = {
	en: { label: 'EN', name: 'English', htmlLang: 'en' },
	es: { label: 'ES', name: 'Español', htmlLang: 'es-MX' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const en = {
	meta: {
		title: 'Alfredo Medina · Cloud & DevOps engineer',
		description:
			'AWS cloud engineer with 7+ years in production. I help businesses deploy, maintain, scale and cut the cost of their apps, including the ones built with AI.',
	},
	nav: {
		label: 'Primary',
		services: 'Services',
		process: 'Process',
		contact: 'Contact',
		theme: 'Toggle dark mode',
		language: 'Language',
	},
	footer: { social: 'Social' },
	cta: { book: 'Book a free 15-min call' },
	suggest: { text: 'This site is also available in English.', action: 'View in English', dismiss: 'Dismiss' },
	hero: {
		eyebrow: 'Cloud & DevOps engineer, AWS',
		titleA: 'You built the app.',
		titleB: 'I’ll make it run.',
		lede: 'Made something with AI and not sure how to get it online, keep it secure, or stop the bill from growing? I’m an AWS engineer with over 7 years running production systems. I design, deploy and look after cloud infrastructure for businesses of any size.',
		status: 'Taking on new projects',
	},
	ai: {
		label: '01 — Built with AI?',
		title: 'AI got you a working app. Production is a different job.',
		body: 'AI tools make building fast. Putting what you built in front of real customers, reliably, securely and without surprise costs, still takes experience. That’s the part I handle, and I explain it in plain language.',
		pains: [
			'It works on my computer, but I don’t know how to put it online.',
			'It’s live, but it’s slow, it crashes, or I’m afraid to change anything.',
			'I’m not sure my users’ data is safe.',
			'The hosting bill keeps going up and I don’t know why.',
		],
	},
	services: {
		label: '02 — What I do',
		items: [
			{
				title: 'Deploy and maintain AI-built apps',
				text: 'Take your project from prototype to a stable, monitored production setup, then keep it healthy as it grows.',
			},
			{
				title: 'Cloud infrastructure on AWS',
				text: 'Secure, automated and documented infrastructure: infrastructure as code, CI/CD pipelines, monitoring and backups.',
			},
			{
				title: 'Cost optimization',
				text: 'See where your cloud money goes and cut what you don’t need, without breaking anything.',
			},
			{
				title: 'AI and automation for your business',
				text: 'Put agents and automations to work on real tasks, and modernize the processes around them.',
			},
		],
	},
	process: {
		label: '03 — How it works',
		step: 'Step',
		items: [
			{ title: 'A short call', text: 'Tell me what you have and where you want to go. No jargon required.' },
			{ title: 'A clear plan', text: 'Defined scope and an honest estimate, so you know what you’re paying for.' },
			{ title: 'Build, then hand over', text: 'You own everything: accounts, code and docs. Ongoing support if you want it.' },
		],
	},
	contact: {
		label: '04 — Contact',
		title: 'Tell me what you’re building.',
		body: 'Small business or large team, early prototype or system already in production.',
	},
};

type Dict = typeof en;

const es: Dict = {
	meta: {
		title: 'Alfredo Medina · Ingeniero Cloud y DevOps',
		description:
			'Ingeniero cloud de AWS con más de 7 años en producción. Ayudo a negocios a desplegar, mantener, escalar y reducir el costo de sus apps, incluidas las hechas con IA.',
	},
	nav: {
		label: 'Principal',
		services: 'Servicios',
		process: 'Proceso',
		contact: 'Contacto',
		theme: 'Cambiar modo oscuro',
		language: 'Idioma',
	},
	footer: { social: 'Redes' },
	cta: { book: 'Agenda una llamada gratis de 15 min' },
	suggest: { text: 'Este sitio también está disponible en español.', action: 'Ver en español', dismiss: 'Cerrar' },
	hero: {
		eyebrow: 'Ingeniero Cloud y DevOps, AWS',
		titleA: 'Tú creaste la app.',
		titleB: 'Yo la pongo a funcionar.',
		lede: '¿Hiciste algo con IA y no sabes cómo publicarlo, mantenerlo seguro o evitar que la factura siga creciendo? Soy ingeniero de AWS con más de 7 años operando sistemas en producción. Diseño, despliego y cuido infraestructura en la nube para negocios de cualquier tamaño.',
		status: 'Disponible para nuevos proyectos',
	},
	ai: {
		label: '01 — ¿Hecho con IA?',
		title: 'La IA te dio una app que funciona. Producción es otro trabajo.',
		body: 'Con herramientas de IA, construir es rápido. Ponerlo frente a clientes reales, de forma confiable, segura y sin costos sorpresa, todavía requiere experiencia. De esa parte me encargo yo, y te la explico sin tecnicismos.',
		pains: [
			'Funciona en mi computadora, pero no sé cómo ponerlo en línea.',
			'Ya está en línea, pero es lento, se cae o me da miedo cambiar algo.',
			'No estoy seguro de que los datos de mis usuarios estén protegidos.',
			'La factura del hosting no deja de subir y no sé por qué.',
		],
	},
	services: {
		label: '02 — Qué hago',
		items: [
			{
				title: 'Despliegue y mantenimiento de apps hechas con IA',
				text: 'Llevo tu proyecto de prototipo a un entorno de producción estable y monitoreado, y lo mantengo sano mientras crece.',
			},
			{
				title: 'Infraestructura cloud en AWS',
				text: 'Infraestructura segura, automatizada y documentada: infraestructura como código, pipelines de CI/CD, monitoreo y respaldos.',
			},
			{
				title: 'Optimización de costos',
				text: 'Descubre a dónde se va tu dinero en la nube y recorta lo que no necesitas, sin romper nada.',
			},
			{
				title: 'IA y automatización para tu negocio',
				text: 'Pon agentes y automatizaciones a trabajar en tareas reales, y moderniza los procesos a su alrededor.',
			},
		],
	},
	process: {
		label: '03 — Cómo funciona',
		step: 'Paso',
		items: [
			{ title: 'Una llamada corta', text: 'Cuéntame qué tienes y a dónde quieres llegar. Sin tecnicismos.' },
			{ title: 'Un plan claro', text: 'Alcance definido y una estimación honesta, para que sepas qué estás pagando.' },
			{ title: 'Construyo y te entrego', text: 'Todo es tuyo: cuentas, código y documentación. Soporte continuo si lo necesitas.' },
		],
	},
	contact: {
		label: '04 — Contacto',
		title: 'Cuéntame qué estás construyendo.',
		body: 'Negocio pequeño o equipo grande, prototipo temprano o sistema ya en producción.',
	},
};

const ui: Record<Lang, Dict> = { en, es };

/** Resolve the page language from Astro.currentLocale. */
export const getLang = (locale: string | undefined): Lang => (locale && locale in languages ? (locale as Lang) : defaultLang);

/** Copy in a specific language (e.g. a prompt written in the visitor's language). */
export const getDict = (lang: Lang) => ui[lang];

/** Copy for the current page: `const t = useTranslations(Astro.currentLocale)`. */
export const useTranslations = (locale: string | undefined) => ui[getLang(locale)];
