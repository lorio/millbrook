import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const PrivacyPage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}
            style={{
              fontWeight:`bold`,
              display: `block`,
              marginBottom: `20px`,
            }}
          >
            Close
          </Link>
        ) : (
          <header
            style={{
              textAlign: `center`,
            }}
          >
            <h1>
              Millbrook Healing
            </h1>
          </header>
        )}

        <h4 style={{marginBottom: `8px`}}>Privacy at millbrookhealing.com</h4>
<p> We do not sell, trade, or otherwise transfer information. Although we do not track your visit with cookies, the platform on which we operate our website may do so. <a href="https://www.netlify.com/privacy/">Here</a> is <em>their</em> policy. By continuing to use our site, you agree to our trusted partner's use of cookies. If you don't agree, but you still want to visit, you can turn off the cookies in your browser settings.</p>

<h4 style={{marginBottom: `8px`}}>How to control your cookies</h4>
<p>Most internet browsers automatically accept cookies, but you can delete existing cookies from your browser and choose not to receive cookies in future. You just need to edit your browser options. To find out how to delete or control the cookies stored on your computer, visit about cookies.org</p>

        <Link to="/"
          style={{
              fontWeight:`bold`,
              display: `block`,
              marginBottom: `20px`,
            }}
          >
          Millbrook Healing
        </Link>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default PrivacyPage
