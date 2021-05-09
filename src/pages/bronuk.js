import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import {Link} from 'gatsby';
import { BgImage } from "gbimage-bridge"

export default function BronUk() {
    const { placeholderImage, contents } = useStaticQuery(
        graphql`
          query {
            placeholderImage: file(relativePath: {eq: "Source.jpeg"}) {
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
          <h1 className="genHeading">SOURCE</h1>
          </div>
          </BgImage>
          <div className="genText">
          <p>
          The source from which Aikyam sprung is Nepal. There, we met and 
          connected with a special person who inspired us to start working 
          together. Since then we are deeply connected with Nepal, a poor 
          country with an unprecedented spiritual wealth.
          </p>
          <p>
          In 2000, Premangee, a young Nepali humanitarian and conservationist, 
          planted the first seed with the intention of helping all life on earth. 
          The seed was patiently watered with love and compassion and blossomed 
          into a series of projects which are now successfully operating in Nepal: 
          a school which was rebuild after the 2015 earthquakes supporting more than 
          300 children, a women’s program to learn about motherhood and the feminine 
          qualities, an international communal home, a retreat centre, a biodynamic 
          farm, and now we are supporting the building of an Ayurvedic laboratory.
          </p> 
<p>Since 2000, many people from different countries got into contact with Premangee 
    and he inspired us to initiate new projects in our respective countries. Now we 
    have founded AVA in Germany, We Are One in Spain, Divine Breath Foundation in 
    Australia and Aikyam in the Netherlands. While we each work in our own countries 
    we work together as well.
</p>
       </div>
        </Layout>
    )
}
