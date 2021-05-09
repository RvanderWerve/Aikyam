import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

export default function Bron() {
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
          <h1 className="genHeading">BRON</h1>
          </div>
          </BgImage>
          <div className="genText">
          <p>
          De bron van waaruit Aikyam is ontstaan is Nepal. Daar hebben we 
          kennis gemaakt met een bijzonder mens die ons zodanig geraakt 
          heeft dat we ons met hem en met elkaar verbonden hebben. Daardoor 
          zijn we ook diep betrokken bij Nepal, een ogenschijnlijk arm land 
          met een ongekende spirituele rijkdom. 
          </p>
          <p>
          In 2000 plantte Premangee, een Nepalese humanitaire jonge man en 
          natuurbeschermer, het eerste zaadje met de intentie om alle leven 
          op aarde te helpen. Het zaadje werd geduldig verzorgd met liefde en 
          compassie en bloeide uit tot een serie projecten die nu succesvol 
          worden uitgevoerd in Nepal: een school met meer dan 300 kinderen die 
          opnieuw is opgebouwd na de aardbevingen in 2015, een vrouwenprogramma 
          om te leren over het moederschap en de vrouwelijke kwaliteiten, een 
          internationaal gemeenschapshuis, een retraitecentrum, een biodynamische 
          boerderij en op dit moment wordt een ayurvedisch laboratorium opgericht. 
          </p> 
<p>
Sinds 2000 zijn vele mensen uit verschillende landen in aanraking gekomen 
met Premangee en heeft hij ons geïnspireerd om in verscheidene landen 
nieuwe projecten op te starten. Zo zijn AVA in Duitsland, We Are One in 
Spanje, Divine Breath Foundation in Australië en Aikyam in Nederland 
ontstaan. We werken zowel in onze eigen landen als samen. 
</p>
       </div>
        </Layout>
    )
}
