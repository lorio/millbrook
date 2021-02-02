import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"



const Services = styled.section `
  max-width: 650px;
  margin: 0 auto;
  padding: 0 1.45em;
`
const About = styled.section `
  max-width: 650px;
  margin: 0 auto;
  padding: 0 1.45em;
`
const SectionHeading = styled.h2 `
  text-align: center;
`

const IndexPage = () => (
   <StaticQuery
    query={graphql`
      {
        poster: file(relativePath: {eq:
        "poster.jpg"}) {
          childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `} render={(data) => (
  <Layout>
    <SEO title="Home" />
    
    <Services>
      <SectionHeading>Find your flow ...</SectionHeading>
      <p><b>Hypnotherapy</b>: What patterns in your life would you like to change, what traumas would you like to overcome? What behaviors need fixing? How will that be?  In Hypnotherapy the client is induced into a trance--however light or deep. It’s in this state that we ask your unconscious mind for solutions and resolutions. You, your brain, and your life are malleable. Your unconscious knows the best next steps. Let’s relax, take a deep breath, adjust perspectives, and ask your unconscious mind to come forward, because you and your unconscious know what’s best.  
    </p>
      <p><b>Motivational Coaching</b>: Where do you want to be? How can you get there? What does that look like? As a motivational coach I use a variety of resources such as using affirmations, meditation, and hypnotherapy, to name a few. You get into the practice of <em>distinguishing between negative and positive trances and mindsets</em>. You learn to come to terms with our <em>limiting beliefs</em> and to decide what does or does not serve us. You enter your clearest and most awoken states which lead to the best choices. You use principles from the Law of Attraction to create new structures, that feed your motivation and your ability to achieve.</p>

      <p><b>Spiritual Counsel</b>: Sometimes it’s good to just talk. As a counselor, I bring channeled information as well as a conversation. I transmit what I learn, what I hear and see which creates the basis of our conversation on spiritual evolution.</p> 
    </Services>
    <div style={{ maxWidth: `600px`, margin: `0 auto 1.45rem` }}>
      <Img fluid={data.poster.childImageSharp.fluid} alt="hillary" />
    </div>
    <About>
        <SectionHeading>About Hillary Keel</SectionHeading>
        <p>Born and raised in the USA, a large portion of my life was spent in Europe, where, among other things, I was drawn to meditative and healing practices. 2008:  first education and training in the Art of Channeling with <a href="www.channeling-healing.com">Rhiannon Augenthaler</a>, with whom I continue to train, as well as further work with the channel, <a href="https://universalcorewellness.com/loumartin/">Lou Martin</a>. Another significant part of this process was working as an interpreter (German/English) for the medium, <a href="https://maitra.net/">Maitra</a>.</p> 

        <p>In New York I worked with the poet and hypnotherapist Kristin Prevallet, who trained me as hypnotist. Since 2015 I have been a certified hypnotherapist with the IACT (International Association for Counselors and Therapists), where I continue as an active member.  In 2020 I received the certification as a Life Coach from the <a href="https://www.achievetoday.com">Achieve Today </a>company for personal development.</p>

        <p>I have academic degrees in German and English (B.A. Mary Washington College, 1982) as well as Creative Writing (M.F.A. Naropa University, 2012)</p>
    </About> 
    <Link to="/reviews/">Reviews</Link> <br />
    <Link to="/privacy/">Privacy</Link>
  </Layout>
   )}
  />
)

export default IndexPage
