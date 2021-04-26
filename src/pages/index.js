import React from 'react'
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from 'gatsby'
// import { getImage } from "gatsby-plugin-image"

// import { BgImage } from "gbimage-bridge"
// import BackgroundImage from 'gatsby-background-image'




export default function Home() {
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
      }
      
    `
  )

  return (

  <Layout>
      Tag="section"
      >
        <div className="homeText">
          <div className="frontLogo">
            <img src="Aikyam final.png" alt=""/>
          
          </div>
          </div>
          <div className="homeText bg">
<div className="frontText">
<article><p className="frontText"> Aikyam is een Nederlandse stichting. Ons werk richt zich op het creëren van een gezonde,
   blije en vreedzame samenleving, met ruimte voor alle nationaliteiten, rassen, geloofsovertuigingen
    en sociale posities, waarin verbinding,
   tolerantie en harmonie centraal staan.</p></article>
   </div>


             </div>
          
        </Layout>
  )
}

