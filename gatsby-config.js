/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
         {
           resolve: 'gatsby-source-graphql',
           options: {
             typeName: 'WPGraphQL',
             fieldName: 'wpgraphql',
             url: 'http://localhost//index.php?graphql',
           }
         },
         `gatsby-transformer-sharp`, 
         `gatsby-plugin-sharp`
       ],
       pathPrefix: "/Aikyam",
}
