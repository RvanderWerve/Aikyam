import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import {Link} from 'gatsby';
import { BgImage } from "gbimage-bridge"

export default function Samen() {
    const { placeholderImage, contents } = useStaticQuery(
        graphql`
          query {
            placeholderImage: file(relativePath: {eq: "Samen Together.JPG"}) {
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
          <div className="genHeading">
          <h1 className="genHeading">SAMEN</h1>
          </div>
          </BgImage>
          <div className="genText">
          <p>
          Wees welkom als je, op welke manier dan ook, bij wilt dragen aan de groei van Aikyam. 
          Je bent welkom in onze familie: jouw energie, ideeën, creativiteit, praktische en eventueel 
          financiële bijdrage geven ons de motivatie en kracht om samen onze visie te verwezenlijken. 
          In dit vroege stadium vragen we je om te vertrouwen op onze visie voor Aikyam en om zonder verwachtingen mee te doen. </p>
<p>Zo kan Aikyam zich op natuurlijke wijze ontwikkelen en groeien. Natuurlijk willen we de ontwikkelingen met elkaar delen. 
    Zodra het mogelijk is gaan we lessen en workshops aanbieden en ontmoetingen met elkaar organiseren.
</p> 
<p>We zullen alleen zo sterk zijn als de gemeenschap die om ons heen groeit. 
Ben je ook benieuwd naar wat we samen kunnen opbouwen?  
</p>
<p>Iets moois begint te ontluiken…
          </p>
          <p className="quoteText">
          Voeg je bij Aikyam<br/>
            wees het zaadje<br/>
dat uitgroeit tot een stralende toekomst
          </p>
<p>
We komen graag met je in <Link to="/contact">contact!</Link> 
</p>
          </div>
        </Layout>
    )
}
