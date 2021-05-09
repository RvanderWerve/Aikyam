import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

export default function Nieuws() {
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
          <h1 className="nieuwsHeading">NIEUWS</h1>
          </div>
          </BgImage>
        <div className="genText">
          <p>
          We zullen ieder kwartaal een nieuwsbrief publiceren, waarin we je op de hoogte
           houden van de ontwikkelingen en groei van Aikyam.
          </p>
          <p>
          Wil je graag op de hoogte blijven van onze activiteiten? 
          Meld je dan hieronder bij "Aanmelden nieuwsbrief" aan.
          </p>
        </div>
        </Layout>
    )
}
