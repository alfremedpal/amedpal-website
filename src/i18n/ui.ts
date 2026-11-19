// All page copy, per language. English is the source of truth; Spanish (es-MX)
// must match its shape (enforced by the `Dict` type).

export const languages = {
	en: { label: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_US' },
	es: { label: 'ES', name: 'Español', htmlLang: 'es-MX', ogLocale: 'es_MX' },
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
	cta: {
		book: 'Book a free 15-min call',
		whatsapp: 'Message me on WhatsApp',
		whatsappText: 'Hi Alfredo, I found your website and I’d like to talk about my project.',
	},
	suggest: { text: 'This site is also available in English.', action: 'View in English', dismiss: 'Dismiss' },
	hero: {
		eyebrow: 'Cloud & DevOps engineer, AWS',
		titleA: 'You built the app.',
		titleB: 'I’ll make it run.',
		lede: 'Made something with AI and not sure how to get it online, keep it secure, or stop the bill from growing? I’m a cloud engineer with over 7 years running production systems. I design, deploy and look after the infrastructure your business runs on, whatever its size.',
		status: 'Taking on new projects',
		cert: 'AWS Certified Solutions Architect – Professional',
		certVerify: 'Verify on Credly',
	},
	ai: {
		label: 'Built with AI?',
		title: 'AI got you a working app. Production is a different job.',
		body: 'AI tools make building fast. Putting what you built in front of real customers, reliably, securely and without surprise costs, still takes experience. That’s the part I handle, and I explain it in plain language.',
		pains: [
			'It works on my computer, but I don’t know how to put it online.',
			'It’s live, but it’s slow, it crashes, or I’m afraid to change anything.',
			'I’m not sure my users’ data is safe.',
			'The hosting bill keeps going up and I don’t know why.',
		],
		reply: 'Sound familiar? I can help with all of it.',
		from: 'Client:',
		me: 'Me:',
	},
	services: {
		label: 'What I do',
		tools: 'Tools I work with',
		toolsMore: 'and more',
		awsMore: 'many more',
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
				title: 'Custom software development',
				text: 'Web apps, APIs and internal tools, from front end to back end, built to be easy to maintain.',
			},
			{
				title: 'Digital tools for your business',
				text: 'Professional email on your own domain, team chat like Slack, shared documents and the everyday tools that keep your team organized online.',
			},
		],
	},
	process: {
		label: 'How it works',
		step: 'Step',
		items: [
			{ title: 'A quick text or a short call', text: 'Message me or book a call. Tell me what you have and where you want to go. No jargon required.' },
			{ title: 'A clear plan', text: 'Defined scope and an honest estimate, so you know what you’re paying for.' },
			{ title: 'Build, then hand over', text: 'You own everything: accounts, code and docs. Ongoing support if you want it.' },
		],
	},
	contact: {
		label: 'Contact',
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
	cta: {
		book: 'Agenda una llamada gratis de 15 min',
		whatsapp: 'Escríbeme por WhatsApp',
		whatsappText: 'Hola Alfredo, vi tu sitio web y me gustaría platicar sobre mi proyecto.',
	},
	suggest: { text: 'Este sitio también está disponible en español.', action: 'Ver en español', dismiss: 'Cerrar' },
	hero: {
		eyebrow: 'Ingeniero Cloud y DevOps, AWS',
		titleA: 'Tú creaste la app.',
		titleB: 'Yo la pongo a funcionar.',
		lede: '¿Hiciste algo con IA y no sabes cómo publicarlo, mantenerlo seguro o evitar que la factura siga creciendo? Soy ingeniero cloud con más de 7 años operando sistemas en producción. Diseño, despliego y cuido la infraestructura sobre la que corre tu negocio, sin importar su tamaño.',
		status: 'Disponible para nuevos proyectos',
		cert: 'AWS Certified Solutions Architect – Professional',
		certVerify: 'Verificar en Credly',
	},
	ai: {
		label: '¿Hecho con IA?',
		title: 'La IA te dio una app que funciona. Producción es otro trabajo.',
		body: 'Con herramientas de IA, construir es rápido. Ponerlo frente a clientes reales, de forma confiable, segura y sin costos sorpresa, todavía requiere experiencia. De esa parte me encargo yo, y te la explico sin tecnicismos.',
		pains: [
			'Funciona en mi computadora, pero no sé cómo ponerlo en línea.',
			'Ya está en línea, pero es lento, se cae o me da miedo cambiar algo.',
			'No estoy seguro de que los datos de mis usuarios estén protegidos.',
			'La factura del hosting no deja de subir y no sé por qué.',
		],
		reply: '¿Te suena? Te ayudo con todo eso.',
		from: 'Cliente:',
		me: 'Yo:',
	},
	services: {
		label: 'Qué hago',
		tools: 'Herramientas con las que trabajo',
		toolsMore: 'y más',
		awsMore: 'muchos más',
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
				title: 'Desarrollo de software a la medida',
				text: 'Aplicaciones web, APIs y herramientas internas, de frontend a backend, fáciles de mantener.',
			},
			{
				title: 'Herramientas digitales para tu negocio',
				text: 'Correo profesional con tu propio dominio, chat de equipo como Slack, documentos compartidos y las herramientas del día a día que mantienen a tu equipo organizado en línea.',
			},
		],
	},
	process: {
		label: 'Cómo funciona',
		step: 'Paso',
		items: [
			{ title: 'Un mensaje rápido o una llamada corta', text: 'Escríbeme o agenda una llamada. Cuéntame qué tienes y a dónde quieres llegar. Sin tecnicismos.' },
			{ title: 'Un plan claro', text: 'Alcance definido y una estimación honesta, para que sepas qué estás pagando.' },
			{ title: 'Construyo y te entrego', text: 'Todo es tuyo: cuentas, código y documentación. Soporte continuo si lo necesitas.' },
		],
	},
	contact: {
		label: 'Contacto',
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
