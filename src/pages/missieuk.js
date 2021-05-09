import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import {Link} from 'gatsby';
import { BgImage } from "gbimage-bridge"


export default function MissieUk() {
  const { placeholderImage, contents } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: {eq: "Missie landscape.jpg"}) {
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
      <div className="missieHeading">
          <h1 className="missieHeading">MISSION</h1>
          </div>
          </BgImage>
          <div className="genText missionText">
            <p>
            It is our mission to create a loving society where all forms of life are 
            respected and included. 
            </p>
            <p>
            We do this with trust, acceptance and patience, without expectations, <br/>
            with the light and the good in every human being as our starting point. 
            </p>
          </div>
    </Layout>
)
}
