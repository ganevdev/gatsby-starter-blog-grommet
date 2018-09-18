import React, { Component } from 'react'
import { Grommet } from 'grommet'
import siteConfig from '../../site-config'

import Navbar from './Navbar'

// https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
// https://github.com/grommet/grommet/tree/NEXT/src/js/themes
const siteConfigTheme = {
  global: {
    font: {
      family: siteConfig.fontFamily,
    },
    heading: {
      font: {
        family: siteConfig.fontFamilyHeadings,
      },
    },
    colors: {
      brand: siteConfig.mainColor,
    },
  },
}

export default class Template extends Component {
  render() {
    return (
      <Grommet theme={siteConfigTheme}>
        <Navbar />
        {this.props.children}
      </Grommet>
    )
  }
}
