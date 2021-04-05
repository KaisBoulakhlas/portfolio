var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

module.exports = {
  siteMetadata: {
    title: `Portoflio`,
    description: `Voici mon portfolio traçant mon parcours dans l'informatique et mes différents projets.`,
    author: `@kaisboulakhlas`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/projects`,
      },
    },
    netlifyCmsPaths, // Including in your Gatsby plugins will transform any paths in your frontmatter
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths, // Including in your Remark plugins will transform any paths in your markdown body
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 930,
              backgroundColor: 'transparent', // required to display blurred image first
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-image',
    `gatsby-plugin-remove-trailing-slashes`,
    'gatsby-plugin-netlify', // make sure to keep it last in the array

  ],
}
