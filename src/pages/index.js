import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
// import "./index.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Hello There</h1>
      <div>
        <div
          style={{
            maxWidth: `300px`,
            margin: "0 auto 1.45rem",
          }}
        >
        </div>
      </div>
    </div>
  </Layout>
)
export default IndexPage
