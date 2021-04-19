import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'


export default function Missie() {

    const { contents } = useStaticQuery(
        graphql`
          query {
            contents: wpgraphql { 
              pageBy(id: "cG9zdDo2OA==") {
                content
                title
              }
            }
          }
          
        `
      )
    const {content, title} = contents.pageBy;
    return (
        <Layout>
        <div className="main-container">
           <h2>{title}</h2> 
<article dangerouslySetInnerHTML={{__html: content}} ></article>       </div>
        </Layout>
    )
}
