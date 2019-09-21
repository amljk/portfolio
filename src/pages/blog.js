import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
