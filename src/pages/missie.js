import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import {Link} from 'gatsby';
import { BgImage } from "gbimage-bridge"

export default function Missie() {
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
          <h1 className="missieHeading">MISSIE</h1>
          </div>
          </BgImage>
          <div className="genText missionText">
            <p>
            Het is onze missie om een liefdevolle samen-leving met respect en 
            ruimte voor alle levensvormen te creëren. 
            </p>
            <p>
            Dit doen we met vertrouwen, acceptatie en geduld, zonder verwachtingen, <br/>
            uitgaande van het licht en het goede in ieder mens. 
            </p>
          </div>
      </Layout>
  )
}
