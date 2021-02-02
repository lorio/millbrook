import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Reviews = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Reviews</h2>
    <p>Welcome to reviews</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default Reviews
