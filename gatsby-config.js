module.exports = {
  siteMetadata: {
    title: `Millbrook Healing`,
    description: `Millbrook Healing offers services and support in creating change, motivation, or spiritual evolution in your life. This can be done by way of life coaching, channeled counsel, or hypnotherapy. Contact Millbrook Healing for a free consultation.`,
    image: `https://millbrookhealing.com/images/background.jpg`,
    author: `Hillary Keel`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
   {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
   },
    `gatsby-plugin-anchor-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `millbrook-healing`,
        short_name: `millbrook`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        legacy: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
