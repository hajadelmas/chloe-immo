require('dotenv').config()


module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-education',
      options: {
        sources: {
          contentful: true,
          local: false
        }
      }
    }
    
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Chloé Carmona',
    name: 'Chloé Carmona',
    description: 'Site internet de Chloé Carmona',
    address: 'Bordeaux',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Youtube',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Acceuil',
        slug: '/'
      },
      {
        name: 'À propos',
        slug: '/authors'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Posez moi des questions',
            slug: '/contact'
          },
          {
            name: 'À propos',
            slug: '/about'
          },
          {
            name: 'Contact',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal',
        items: [
          {
            name: 'Tarifs',
            slug: '/'
          },
          {
            name: 'Cookies',
            slug: '/'
          },
          {
            name: 'Règles utilisations',
            slug: '/'
          }
        ]
      }
    ]
  }
}
