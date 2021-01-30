import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import icon from "../images/icon.png"


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
`
const Header = ({ siteTitle, icon }) => (
  <header
    style={{
      position: `relative`,
      display: `flex`,
    }}
  >
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
        font: `bold 2.5em/0.8 'Red Rose'`,
        fontWeight: 700,
        color: `#0c264a`,
        backgroundColor: `transparent`,
        alignItem: `center`,
        width: `50vw`,
        }}>
        <Link
          to="/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Logo>
        {icon}
      </Logo>
    </div>
    <Subtitle>
      Hypnotherapy<br />Motivational Coaching<br />Spiritual Counsel
    </Subtitle>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  icon: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  icon: ``,
}

export default Header
