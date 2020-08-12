import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
// import "./index.css"
const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <h1>About</h1>
      <p>I'm a Toronto-based developer with mixed experience in front-end, back-end and operations work (with an increased focus in the latter two categories as of late). I consider my role and responsibility to go beyond simply coding, and to that end I'm a strong proponent of a user-centric, agile methodology in the work I do. You can currently find me at ecobee, building out an energy control platform to help create a more sustainably-powered world. </p>
      <p>Some of my interests in the realm of computing and development include data, machine learning, privacy, and empowering youth through STEM education. I recognize the vital role the internet and technology play in society at large and I hope to do my part to ensure their impact is a positive one.</p>
      <p>Outside of my day job, I spend a lot of time creating computational art. I also enjoy cycling and hiking, film and photography, and reading and writing.</p>
    </div>
  </Layout>
)
export default About
