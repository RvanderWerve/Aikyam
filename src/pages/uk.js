import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
// import BackgroundImage from 'gatsby-background-image'




export default function Home_uk() {
  const { placeholderImage, contents } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: {eq: "Aikyam bg landscape.jpeg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              quality: 80
              webpOptions: {quality: 90}
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        contents: wpgraphql { 
          pageBy(id: "cG9zdDo2Ng==") {
            content
            title
          }
        }
      }
      
    `
  )
  const pluginImage = getImage(placeholderImage);
const {content, title} = contents.pageBy;
console.log("contents is: " +JSON.stringify(contents));
console.log("content is: " +content);

const styleFront = {
  color: 'white',
};
  return (

  <Layout>
     <BgImage image={pluginImage} className="bg"
      Tag="section"
      >
        <div className="homeText">
          <div className="frontLogo">
            <img src="/Aikyam final.png" alt=""/>
          
          </div>
          </div>
          <div className="homeText">
<div className="frontText">
<article lang="en" dangerouslySetInnerHTML={{__html: content}}></article>
</div>
          {/* <div className="frontText" dangerouslySetInnerHTML={{__html: content}}></div> */}

             </div>
          
    </BgImage>
        </Layout>
  )
}

