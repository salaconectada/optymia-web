import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Empresa',
      href: getPermalink('/empresa'),
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
        { text: 'Empresa', href: getPermalink('/empresa') },
        { text: 'Contacto', href: getPermalink('/contacto') },
      ],
    },
    {
      title: 'Soluciones',
      links: [
        { text: 'Analítica avanzada', href: getPermalink('/soluciones') },
        { text: 'Optimización de procesos', href: getPermalink('/soluciones') },
        { text: 'Business Intelligence', href: getPermalink('/soluciones') },
        { text: 'Desarrollo de software', href: getPermalink('/soluciones') },
      ],
    },
    {
      title: 'Tecnologías',
      links: [
        { text: 'Ciencia de datos', href: getPermalink('/tecnologias') },
        { text: 'Machine Learning', href: getPermalink('/tecnologias') },
        { text: 'NIR y analítica', href: getPermalink('/tecnologias') },
        { text: 'Dashboards y trazabilidad', href: getPermalink('/tecnologias') },
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