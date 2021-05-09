import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

export default function ContactUk() {
    const { placeholderImage } = useStaticQuery(
        graphql`
          query {
            placeholderImage: file(relativePath: {eq: "Slak.jpg"}) {
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
          <div className="contactHeading">
          <h1 className="contactHeading">CONTACT</h1>
          </div>
          </BgImage>
        <div className="genText">
          <p>
         
          </p>
          <p>
            </p>
        </div>
        </Layout>
    )
}
