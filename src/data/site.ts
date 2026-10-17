/**
 * ALL the content of the site lives in this file.
 * Edit the text here; you should not need to touch the markup.
 */

export type Service = {
  title: string;
  description: string;
  /** Optional short bullet list shown under the description. */
  points?: string[];
};

export const site = {
  name: 'Scale for Earth',

  /** Short line shown above the name in the hero. */
  eyebrow: 'Earth Observation · Geospatial · Pipelines · Backend',
  tagline: 'Geospatial data pipelines, built to scale.',
  description:
    'Scale for Earth designs and builds high-throughput data processing pipelines, and the backend systems that run them, for companies and organisations working with Earth Observation and other geospatial data, in the cloud or on-premise.',
  seoDescription:
    'Independent consultancy building high-throughput pipelines and backend systems for Earth Observation and geospatial data, in the cloud or on-premise.',
  seoTitle: 'Scale for Earth — Geospatial Data Pipeline Consulting',

  /**
   * Put your files in /public and reference them from the root, e.g. '/logo.svg'.
   * Leave as null to show a plain text wordmark / no hero image.
   */
  logo: '/logo-light.svg',
  logoDark: '/logo-dark.svg',
  logoAlt: 'Scale for Earth',
  heroImage:'/hero.webp', // e.g. '/hero.jpg'
  heroImageAlt: 'TODO: describe the image',
  heroImagePosition: 'center' as string,
  /** Image used for link previews (LinkedIn, Slack, ...). 1200x630 works best. */
  ogImage: null as string | null, // e.g. '/og.jpg'

  /**
   * Accent colour. One of: 'signal' (orange) | 'ochre' (gold) | 'cobalt' (blue).
   * All three share the navy #0c1827 and mist #e6f2f0 base; the values live in
   * src/styles/global.css if you want to tweak them or add your own.
   */
  palette: 'signal' as 'signal' | 'ochre' | 'cobalt',
} as const;

/** Header and footer links. Add, remove or rename pages here (each needs a file in src/pages). */
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'What we do', href: '/what-we-do' },
  { label: 'About', href: '/about' },
];

export const services = {
  heading: 'What we do',
  intro:
    'Consulting built around your requirements, from translating R&D methods into production pipelines to reviewing and redesigning existing systems.',

  /**
   * How the services are displayed:
   *  'cards' - grid of cards (good for 3-6 items, with or without bullet points)
   *  'list'  - editorial rows, title left / text right (good for 3-8 items)
   *  'steps' - numbered sequence, reads like a workflow (good for 3-5 items)
   */
  layout: 'cards' as 'cards' | 'list' | 'steps',

  /**
   * Add, remove or reorder items freely: the page adapts to however many you list.
   * These are placeholders: rewrite them in your own words.
   */
  items: [
    {
      title: 'Pipeline and backend architecture',
      description:
        'Starting from your requirements, review how data moves from raw imagery to finished product, and the backend that runs and serves it. Find the bottlenecks and design a system that fits your volumes, deadlines and budget.',
      points: [
        'Review and redesign of existing systems',
        'Orchestration, storage and data model design',
        'Cloud, on-premise or hybrid',
      ],
    },
    {
      title: 'From R&D to production',
      description:
        'Taking the methodology your R&D team has validated in a proof of concept and translating it into a production system: a data pipeline built for production throughput, with the backend to run it and deliver its results.',
      points: [
        'Working directly from your R&D team’s methodology',
        'Translating prototypes into production pipelines',
        'APIs and services to run the pipeline and deliver results',
      ],
    },
    {
      title: 'Migration to the cloud',
      description:
        'Moving pipelines and the services around them from fixed, pre-allocated infrastructure to scalable pay-as-you-use services. In a recent project, processing ten years of data for one area of interest fell from over two hours to about five minutes.',
      points: [
        'Bare metal to cloud-native services',
        'Elastic scaling for peaks and backlogs',
        'Lower running costs through pay-as-you-use',
      ],
    },
    {
      title: 'Geospatial processing at scale',
      description:
        'Workflows built around the demands of geospatial data: many areas of interest in parallel, long historical time series and large imagery archives, processed quickly and accurately, with the results stored and served to your products.',
      points: [
        'Many areas of interest in parallel',
        'Long historical time series',
        'Results stored for fast queries and delivery',
      ],
    },
  ],
};

export const about = {
  heading: 'About',
  /** Each string becomes one paragraph. The first one is also used as the teaser on Home. */
  paragraphs: [
    'I’m an independent consultant who designs data processing pipelines, and the backend systems around them, for Earth Observation and geospatial data. I help companies and organisations process more data, faster and at lower cost, in the cloud or on their own servers.',
    'I started in research, developing computer-vision models for detection and classification, before moving to the engineering side: building the pipelines that get geospatial data processed reliably at scale. After 5 years, my work centres on cloud-native pipelines, and I also run my own services on on-premise servers, so I know both worlds first-hand.',
    'A recent project was the migration of an industrial analytics pipeline from bare metal to the cloud. Daily data for more than 1,500 areas of interest now processes in about fifteen minutes, down from over two hours.',
    'If you have a pipeline that is too slow, too costly or hard to scale, or data that is outgrowing the system built for it, get in touch.',
  ],
  /** Optional portrait or photo for the About page, e.g. '/me.jpg' (file in /public). */
  photo: null as string | null,
  photoAlt: 'TODO: describe the photo',
};

export const contact = {
  heading: 'Get in touch',
  /** Optional line under the heading. Leave empty to hide. */
  intro: 'Tell me about your data and what you need to process.',
  email: 'info@scaleforearth.com',
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/george-begkas/',
    display: 'George Begkas', // text shown on the page; leave '' to show the plain address
  },
  /** e.g. 'Based in Athens, Greece'. Leave empty to hide. */
  location: 'Based in Greece',
};

export const footer = {
  text: 'Geospatial data pipeline consulting.',
};

export const analytics = {
  /** Umami script URL: 'https://cloud.umami.is/script.js' or 'https://<your-host>/script.js'. Leave empty to disable. */
  src: 'https://analytics.kejim.net/script.js',
  websiteId: '73edc076-4d35-45cb-aa54-537812f05b56',
};