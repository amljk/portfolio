import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "../Menu/Menu"

const Header = () => (
  <header
    style={{
      margin: `2rem auto`,
      padding: `0 0 1.45rem 0`,
      maxWidth: `960px`,
      fontFamily: `Basier Circle`,
      textAlign: `right`,
    }}
  >
    <Menu></Menu>
  </header>
)

export default Header
