import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.div`

`
const By = styled.cite`
  text-indent: 10%;
  font-size: 80%;
  padding-bottom: 1em;
  display: block;
`
const CommentText = styled.p`
  margin-bottom: 0;
`

const Comments = (props) => (
  <Container>
    <Item>
        <CommentText>Hillary helped me locate and assert my identity and the tremendous personal power and strength that it brings.</CommentText><By> — Mahet</By><CommentText>My friend and I regularly do sessions with Hillary when he comes into town. Hillary has been able to channel answers to questions in surprising detail. Very profound stuff, highly recommend.</CommentText> <By> — EC, New York City
</By>
    </Item>
    <Item>
        <CommentText>Hillary Keel’s prescient advice has given me a useful sense of situational awareness and led me to appreciate all people and events in my life, as well as the wonders of Nature and the environment in which we live. I would highly recommend her services!</CommentText> <By> — G.S., San Francisco</By>
    </Item>
    <Item>
        <CommentText>By the end of each session with Hillary I was already very much looking forward to the next one, a whole week later...[It's] a privilege to enter Hillary's realm of wisdom, communication, insight, empathy and training, her expertise combined with her personal warmth and human kindness.</CommentText><By> — Susanne, Vienna, January 2021</By>
    </Item>
</Container>

)

export default Comments