import React from "react"
import Comments from "../components/Comments"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
import { siteMetadata } from "../../gatsby-config"


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
  color:  #00264d;
  text-align: center;
  padding-top: 1em;
`
const VideoContainer = styled.section `
  background-color: #00264d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`
const Testimonials = styled.section`
  padding: 0 20px;
  border-top: 3px solid #00264d;
  border-bottom: 3px solid #00264d;
`
const Contact = styled.section `
  background-color: rgba(0, 38, 77, .2);
  color: #00264d;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Millbrook Healing"
          description={siteMetadata.description}
    />
    
    <Services>
      <SectionHeading>Find your flow ...</SectionHeading>
      <p><b>Hypnotherapy</b>: What patterns in your life would you like to change, what traumas would you like to overcome? What behaviors need fixing? How will that be? Do you have pain that needs managing? In Hypnotherapy the client is induced into a trance — however light or deep. It’s in this state that we ask your unconscious mind for solutions and resolutions. You, your brain, and your life are malleable. Your unconscious knows the best next steps. Let’s relax, take a deep breath, adjust perspectives, and ask your unconscious mind to come forward, because you and your unconscious know what’s best.
    </p>
      <p><b>Motivational Coaching</b>: Where do you want to be? How can you get there? What does that look like? As a motivational coach I use a variety of resources such as affirmations, meditation, and hypnotherapy, to name a few. Our sessions help you get into the practice of distinguishing between negative and positive trances and mindsets. You learn to recognize and come to terms with limiting beliefs, and to decide what does or does not serve you. Entering your clearest and most awoken states leads you to the best choices. We practice principles from the Law of Attraction to create new structures, that feed your motivation and your ability to achieve.</p>

      <p><b>Spiritual Counsel</b>: Sometimes it’s good to just talk. As a counselor, I bring channeled information as well as a conversation. I transmit what I learn, what I hear, and see which creates the basis of our conversation on spiritual evolution.</p>
    </Services>
    <VideoContainer>
        <iframe width="420" height="237" title="welcome video" src="https://www.youtube.com/embed/VOuIGepsUVo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </VideoContainer>
    <About>
        <SectionHeading>About Hillary Keel</SectionHeading>
        <p>Born and raised in the USA, a large portion of my life was spent in Europe, where, among other things, I was drawn to meditative and healing practices. In 2008 I first began training in the Art of Channeling with Rhiannon Augenthaler. I have also worked with the channel Lou Martin, as well as for the medium, Maitra, as an interpreter (German-English).</p>

        <p>In the USA I worked with the poet and hypnotherapist Kristin Prevallet, who trained me as hypnotist. Since 2015 I have been a certified hypnotherapist with the IACT (International Association for Counselors and Therapists), where I continue as an active member.  In 2020 I received the certification as a Life Coach from the Achieve Today company for personal development.</p>

        <p>I have academic degrees in German and English (B.A. Mary Washington College, 1982) as well as Creative Writing (M.F.A. Naropa University, 2012)</p>
    </About>
    <Testimonials>
      <SectionHeading>What they found</SectionHeading>
      <Comments />
    </Testimonials>
    <Contact>
      <SectionHeading>Get in touch!</SectionHeading>
      <div id="Contact">
      <ContactForm />
      </div>
    </Contact> 
  </Layout>
)

export default IndexPage
