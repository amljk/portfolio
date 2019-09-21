import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ items }) =>
  items.map(item => {
    return <Link to={`/${item.slug}`}>{item.title}</Link>
  })

Menu.PropTypes = {
  items: PropTypes.object,
}

Menu.defaultProps = {
  items: [
    { title: "Home", slug: "" },
    { title: "About", slug: "about" },
    { title: "Work", slug: "work" },
    { title: "Blog", slug: "blog" },
    // { title: "Contact", slug: "contact" },
  ],
}

export default Menu
