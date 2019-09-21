import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import Image from "../components/Image/Image"
import SEO from "../components/SEO/SEO"
// import "./index.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Hello There</h1>
      <p>Welcome my awesome blog</p>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: "0 auto 1.45rem",
          }}
        >
          <Image />
        </div>
      </div>
      <Link to="/blog/">View all posts</Link>
    </div>
  </Layout>
)
export default IndexPage
