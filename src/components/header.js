import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "./image"
import Navbar from "./Navbar/Navbar"


const Subtitle = styled.h2 `
  text-align: center;
  padding-top: 1em;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0 auto 1em;
  z-index: 20;
`
const Logo = styled.div`
  height: 150;
  width: 150;
  padding:20px;
  z-index: 30;
  background-color: transparent;
`

const Header = ({ siteTitle, icon }) => (
  <header
    style={{
      position: `relative`,
      display: `flex`,
    }}
  >
    <Navbar />
    <div
      style={{
        margin: 0,
        maxWidth: 960,
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        zIndex: `10`,
        backgroundColor: `rgba(255, 255, 255,0.3)`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
      }}
    >
      <h1 style={{
        textAlign: `center`,
        font: `bold 2.5em/0.9 'Red Rose'`,
        fontWeight: 700,
        color: `#0c264a`,
        backgroundColor: `transparent`,
        alignItem: `center`,
        }}>
        <Link
          to="/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <Logo>
           <Image />
          </Logo>
        </Link>
      </h1>
      
       
      
    </div>
    <Subtitle>
      Hypnotherapy<br />Motivational Coaching<br />Spiritual Counsel
    </Subtitle>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
