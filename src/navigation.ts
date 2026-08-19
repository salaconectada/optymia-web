import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Soluciones',
      href: getPermalink('/soluciones'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],

  actions: [
    {
      text: 'Solicitar diagnóstico',
      href: getPermalink('/contacto'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Empresa',
      links: [
        { text: 'Inicio', href: getPermalink('/') },
        { text: 'Soluciones', href: getPermalink('/soluciones') },
        { text: 'Contacto', href: getPermalink('/contacto') },
      ],
    },
    {
      title: 'Soluciones',
      links: [
        { text: 'Analítica avanzada', href: `${getPermalink('/soluciones')}#analitica-avanzada` },
        { text: 'Optimización de procesos', href: `${getPermalink('/soluciones')}#optimizacion-de-procesos` },
        { text: 'Business Intelligence', href: `${getPermalink('/soluciones')}#business-intelligence` },
        { text: 'Desarrollo de software', href: `${getPermalink('/soluciones')}#desarrollo-de-software` },
      ],
    },
    {
      title: 'Tecnologías',
      links: [
        { text: 'Ciencia de datos' },
        { text: 'Machine Learning' },
        { text: 'NIR y analítica' },
        { text: 'Dashboards y trazabilidad' },
      ],
    },
    {
      title: 'Contenido',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Preguntas frecuentes', href: getPermalink('/#faqs') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Optymia SpA · Soluciones tecnológicas, analítica avanzada y optimización de procesos.
  `,
};