import React from 'react'
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
// import BackgroundImage from 'gatsby-background-image'




export default function Home_uk() {
  const { placeholderImage } = useStaticQuery(
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
      }
      
    `
  )
  const pluginImage = getImage(placeholderImage);


  return (

  <Layout>
     <BgImage image={pluginImage} className="bg"
      Tag="section"
      >
        <div className="homeText">
          <div className="frontLogo">
            <img src="Aikyam final.png" alt=""/>
          
          </div>
          </div>
          <div className="homeText bg">
<div className="frontText">
<article><p>
Aikyam is a Dutch foundation. Our work focuses on creating a healthy, 
happy and peaceful society regardless of nationality, race, creed or social 
position, with unity, tolerance and harmony at the heart.
  </p></article>
</div>

             </div>
          
    </BgImage>
        </Layout>
  )
}

