import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const SiteNav = styled.div`
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 960px;
  width: 100%;
  padding-top: 0.2rem;
  padding-right: 3vw;
  
  z-index: 30;
`
const NavList = styled.ul`
  display:flex;
  justify-content: flex-end;
  margin-bottom: 0;
`
const ListItem = styled.li`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  background-color: rgba(255,247,240,.5);
  border-radius: 3px;
` 
const LinkItem = styled(AnchorLink)`
  color: #00264d;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  :hover {
    color: black;
  }
`

const Nav = () => (
  <SiteNav>
    <NavList>
      <ListItem>
        <LinkItem to="/#Contact">Contact</LinkItem>
      </ListItem>
    </NavList>
  </SiteNav>
)

export default Nav