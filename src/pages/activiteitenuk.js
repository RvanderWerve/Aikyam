import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Link} from 'gatsby';
import { BgImage } from "gbimage-bridge"

export default function ActiviteitenUk() {
    const { placeholderImage, placeholderKlankschaal, placeholderAmarill1, placeholderAmarill2 } = useStaticQuery(
        graphql`
          query {
            placeholderImage: file(relativePath: {eq: "Activiteiten Activities.JPG"}) {
              childImageSharp {
                gatsbyImageData(
                  width: 1600
                  quality: 80
                  webpOptions: {quality: 90}
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            placeholderKlankschaal: file(relativePath: {eq: "Klank.JPG"}) {
                childImageSharp {
                    gatsbyImageData(
                      width: 800
                      quality: 80
                      webpOptions: {quality: 90}
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
            }
            placeholderAmarill1: file(relativePath: {eq: "Amaryllis1.jpg"}) {
                childImageSharp {
                    gatsbyImageData(
                      width: 800
                      quality: 80
                      webpOptions: {quality: 90}
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
            }
            placeholderAmarill2: file(relativePath: {eq: "Amarillys2.jpg"}) {
                childImageSharp {
                    gatsbyImageData(
                      width: 800
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
      const klankImage = getImage(placeholderKlankschaal);
      const AmarillImage1 = getImage(placeholderAmarill1);
      const AmarillImage2 = getImage(placeholderAmarill2);
    
    return (
        <Layout>
        <BgImage image={pluginImage} className="bg"
      Tag="section">
          <div className="actHeading">
          <h1 className="actHeading">ACTIVITIES</h1>
          </div>
          </BgImage>
          <div className="genText">
          <p>
          It is important that whatever we do flows naturally. It should never 
          be a battle. Pure love directs the flow of our lives and work, which 
          we share through Aikyam in the Netherlands and beyond. 
              </p>
              <h3>WEEKLY SOUND MEDITATION</h3>
              <p>
              Anu and Martien play the singing bowls every week at course centre 
              De Poort in Groningen. This activity is suspended for now, due to 
              the corona measures. We will let you know as soon as we are able to 
              start again. <br/>
            For more information: <a href="https://www.cursuscentrumdepoort.nl/klankmeditatie.html">website course centre De Poort</a>
              </p>
              <div className="centerImage">
              <GatsbyImage image={klankImage} alt={"De klankschaal"}/>
              </div>
              <h3>AMARYLLIS PROJECT</h3>
              <p>
              Guru Premangee is captivated by the beauty of the amaryllis flowers. He wants to 
              start growing and spreading them in Nepal. ‘Because’ he says, ‘Nepali houses and 
              offices need more colorful flowers!’ Right now there is only one variety available 
              in Nepal so there is room for plenty more!
              </p>
              <p>
              To be able to grow them successfully they need a stable and controlled environment, 
              which means a greenhouse with a well-functioning watering system. This is quite a 
              challenge in Nepal. 
              </p>
              <p>
              Are you knowledgeable in managing these types of plants and/or do you have specific 
              knowledge on designing green houses in countries with only very basic facilities? 
              Or do you wish to contribute financially to this project? Then we would love to get 
              in <Link to="/contactuk">contact</Link> with you!
              </p>
              <div className="centerImage">
              <GatsbyImage image={AmarillImage1} alt={"Amaryllis"}/>
              </div>
              <div className="centerImage">
              <GatsbyImage image={AmarillImage2} alt={"Amaryllis 2"}/>
              </div>

              </div>
        </Layout>
    )
}
