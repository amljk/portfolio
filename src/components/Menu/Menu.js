import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ items }) =>
  items.map(item => {
    return <Link to={`/${item.slug}`} style={{
      padding: `0.5rem 0 0.5rem 1rem`,
      margin: `0 0 0 1rem`,
      textDecoration: `none`,
      color: `black`,
    }}>{item.title}</Link>
  })

Menu.PropTypes = {
  items: PropTypes.object,
}

Menu.defaultProps = {
  items: [
    { title: "About", slug: "about" },
    { title: "Writing", slug: "writing" },
    { title: "Lab", slug: "lab" },
  ],
}

export default Menu
