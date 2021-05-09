import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Link} from 'gatsby';
import { BgImage } from "gbimage-bridge"

export default function Activiteiten() {
    const { placeholderImage,  placeholderKlankschaal, placeholderAmarill1, placeholderAmarill2 } = useStaticQuery(
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
          <h1 className="actHeading">ACTIVITEITEN</h1>
          </div>
          </BgImage>
          <div className="genText">
          <p>
          Belangrijk bij alles wat we doen is dat het stroomt en dat het geen strijd is. 
          Leven en werken vanuit liefde vormen de bedding voor de stroom, die nu in de vorm van 
          Stichting Aikyam haar weg in Nederland vindt, in verbinding met andere landen. 
              </p>
              <h3>WEKELIJKSE KLANKMEDITATIE</h3>
              <p>
              Iedere week bespelen Anu en Martien de klankschalen bij cursuscentrum De Poort 
              in Groningen. Tot nader bericht gepauzeerd, vanwege de corona maatregelen. <br/>
            Voor meer informatie: <a href="https://www.cursuscentrumdepoort.nl/klankmeditatie.html">website cursuscentrum De Poort</a>
              </p>
              <div className="centerImage">
              <GatsbyImage image={klankImage} alt={"De klankschaal"}/>
              </div>
              <h3>AMARYLLIS PROJECT</h3>
              <p>
              Guru Premangee is betoverd door de schoonheid van de Amaryllis bloemen. Hij wil ze in Nepal gaan kweken en verspreiden, ‘want’,
              zo zegt hij, ‘Nepalese kantoren en huizen hebben meer kleurrijke bloemen nodig!’ Op dit moment is daar maar één soort te krijgen
             dus er is ruimte genoeg voor meer!
              </p>
              <p>
              Om amaryllissen goed te kunnen kweken heb je een stabiele omgeving nodig. 
              Het is daarom noodzakelijk om ze in kassen te kweken met een goed bewateringssysteem. 
            Dat is best een uitdaging in Nepal. 
              </p>
              <p>
              Bezit jij over de juiste kennis om amaryllissen te kweken en/of kassen te ontwerpen in 
              landen met zeer beperkte middelen? Of wil je financieel bijdragen aan dit project? 
                Dan komen we graag met je in <Link to="/contact">contact!</Link>
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
