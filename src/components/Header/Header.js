import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "../Menu/Menu"

const Header = () => (
  <header
    style={{
      background: `blue`,
      marginBottom: `1.45rem`,
    }}
  >
    <Menu></Menu>
  </header>
)

export default Header
