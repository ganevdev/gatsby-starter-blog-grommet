import React, { Component } from 'react'

import { Grommet, Heading, Anchor, Text } from 'grommet'

import { siteTheme } from '../site-theme'

import styled from 'styled-components'

export class Navbar extends Component {
  render() {
    const rootPath = `${__PATH_PREFIX__}/`
    const SiteName = styled(Text)`
      color: ${siteTheme.global.colors.brand};
      font-family: ${siteTheme.global.heading.font.family};
    `

    return (
      <Anchor href="/">
        <SiteName
          tag={location.pathname === rootPath ? 'h1' : 'h5'}
          size="xxlarge"
        >
          Gatsby Starter Blog
        </SiteName>
      </Anchor>
    )
  }
}

export default Navbar
