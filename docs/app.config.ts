export default defineAppConfig({
  docus: {
    title: 'Nuxt MDC',
    description: 'MDC stands for MarkDown Components. This syntax supercharges regular Markdown to write documents interacting deeply with any Vue component.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: 'nuxt_js',
      github: 'nuxtlabs/nuxt-mdc',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },

    github: {
      dir: 'docs/content',
      branch: 'main',
      repo: 'nuxt-mdc',
      owner: 'nuxtlabs',
      edit: true
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: false
    },

    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: false,
      title: 'Nuxt MDC'
    },

    titleTemplate: '%s · Nuxt MDC'
  }
})