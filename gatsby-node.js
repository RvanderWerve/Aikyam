const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
    // query for WordPress page data
    const result = await graphql(`
      {
        wpgraphql {
          pages {
            nodes {
              id
              uri
              slug
            }
          }
        }
      }
    `)
  
    // pull the page data out of the query response
    const pages = result.data.wpgraphql.pages.nodes
  
    // loop through WordPress pages and create a Gatsby page for each one
    pages.forEach(page => {
      actions.createPage({
        path: '/pages/' + page.slug,
        component: path.resolve('./src/templates/page-template.js'),
        context: {
          id: page.id,
        },
      })
    })
  }