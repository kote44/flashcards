module.exports = {
  siteMetadata: {
    title: `Flashcards App`,
    description: `Personal Flashcards application`,
    author: `@kote44`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: "flashcards-db",
        collection: "cards",
        server: {
          address: "cluster0-shard-00-00.vbtyl.mongodb.net",
          port: 27017,
        },
        auth: {
          user: "dimas779",
          password: "Rbi6LTQbmdEnkZgx",
        },
        extraParams: {
          replicaSet: "Main-shard-0",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
