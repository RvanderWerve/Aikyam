import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

export default function NieuwsUk() {
    const { placeholderImage, contents } = useStaticQuery(
        graphql`
          query {
            placeholderImage: file(relativePath: {eq: "Pimpelmees.jpeg"}) {
              childImageSharp {
                gatsbyImageData(
                  width: 1600
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
      Tag="section">
          <div className="nieuwsHeading">
          <h1 className="nieuwsHeading">NEWS</h1>
          </div>
          </BgImage>
        <div className="genText">
          <p>
          We will publish a quarterly newsletter to keep you informed 
          of the developments and growth of Aikyam.         
          </p>
          <p>
          Would you like to receive updates on our activities? 
          Please subscribe below with the "Aanmelden nieuwsbrief" button.
          </p>
        </div>
        </Layout>
    )
}
