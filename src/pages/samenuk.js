import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import {Link} from 'gatsby';
import { BgImage } from "gbimage-bridge"

export default function SamenUk() {
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
          <h1 className="genHeading">TOGETHER</h1>
          </div>
          </BgImage>
          <div className="genText">
          <p>
          We invite you to join us, if you wish to contribute to the growth of 
          Aikyam. You are welcome in our family: your energy, ideas, creativity, 
          practical and possibly financial support give us the motivation and 
          power to realize our vision together. In these early stages of our 
          foundation we ask you to trust in our vision for Aikyam and to 
          participate without expectations.           
          </p>
<p>
In this way it will be possible for Aikyam to develop and grow naturally.
Of course we wish to share the developments together. We will inform you
 as soon as we are able to offer classes and workshops as well as organizing gatherings.
</p> 
<p>We will only be as strong as the community that grows around us. 
Do you want to find out what we can build together?  
</p>
<p>Something beautiful has just begun to unfold…
          </p>
          <p className="quoteText">
          Join Aikyam<br/>
          be the seed<br/>
        that blossoms into a bright future
          </p>
<p>
We would love to <Link to="/contactuk">hear</Link> from you! 
</p>
          </div>
        </Layout>
    )
}
