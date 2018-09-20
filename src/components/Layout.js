import React, { Component } from 'react'
import { Grommet, Box, Grid } from 'grommet'

import { injectGlobal } from 'styled-components'

import { siteTheme } from '../site-theme'
import siteConfig from '../../site-config'

import Navbar from './Navbar'
import CardProfile from './CardProfile'
import Footer from './Footer'

injectGlobal`
  img {
    border-radius: 12px;
  }
  body {
    margin: 0
  }
  a:hover {
    opacity: 0.8;
  }
`

export default class Template extends Component {
  render() {
    return (
      <div>
        <Grommet theme={siteTheme}>
          <Box
            background={siteConfig.backgroundColor}
            style={{ minHeight: '100vh' }}
            responsive
            margin="small"
            align="center"
          >
            <Navbar />
            <Box direction="row-responsive">
              <Box width="medium">
                <CardProfile />
              </Box>
              <Box width="large">{this.props.children}</Box>
            </Box>
          </Box>
          <Footer />
        </Grommet>
      </div>
    )
  }
}
