const { description } = require('../../package');
const path = require('path');

module.exports = {
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-katex'));
    },
  },
  alias: {
    styles: path.resolve(__dirname, './styles'),
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Automática para informática',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],

    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],

    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css',
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org',
      },
    ],
    sidebar: {
      '/content/': [
        {
          title: 'Introducción',
          collapsable: false,
          children: ['', 'structure', 'evaluations'],
        },
        {
          title: 'Tema 1',
          collapsable: false,
          children: ['topic1/', 'topic1/controller-element'],
        },
        {
          title: 'Tema 2',
          collapsable: false,
          children: [
            'topic2/',
            'topic2/characteristics',
            'topic2/measurement-systems',
          ],
        },
        {
          title: 'Tema 3',
          collapsable: false,
          children: [
            'topic3/',
            'topic3/plc-programming',
            'topic3/scada',
            'topic3/control-system-creation',
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: 'Nueva versión disponible',
          buttonText: 'Actualizar',
        },
      },
    ],
  ],
};
