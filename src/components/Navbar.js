import React, { Component } from 'react'

import { Grommet, Heading, Anchor, Text, Box } from 'grommet'

import { siteTheme } from '../site-theme'

import styled from 'styled-components'

export class Navbar extends Component {
  render() {
    const rootPath = `${__PATH_PREFIX__}/`
    const SiteName = styled(Heading)`
      color: ${siteTheme.global.colors.brand};
      font-family: ${siteTheme.global.heading.font.family};
      font-size: 30px !important;
      line-height: 56px;
      max-width: 1200px;
      font-weight: 600;
      margin-top: 3.5rem;
    `

    return (
      <Box margin="small">
        <Anchor href="/">
          <SiteName level={location.pathname === rootPath ? '1' : '4'}>
            Gatsby Starter Blog
          </SiteName>
        </Anchor>
      </Box>
    )
  }
}

export default Navbar
