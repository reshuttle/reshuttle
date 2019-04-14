require('dotenv').config()

module.exports = {
  siteMetadata: {
    description: 'Launch your apps faster than ever',
    author: 'Rahman Fadhil',
    siteUrl: 'https://reshuttle.com',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/contributors`,
        name: 'contributors',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-133172956-1',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
  ],
}
