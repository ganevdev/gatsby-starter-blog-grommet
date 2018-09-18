import React, { Component } from 'react'
import { Grommet, Box, Grid } from 'grommet'

import { siteTheme } from '../site-theme'
import siteConfig from '../../site-config'

import Navbar from './Navbar'
import CardProfile from './CardProfile'

export default class Template extends Component {
  render() {
    return (
      <Grommet theme={siteTheme}>
        <Box
          background={siteConfig.backgroundColor}
          style={{ minHeight: '100vh' }}
          responsive
        >
          <Navbar />
          <Box direction="row-responsive" responsive>
            <Box>
              <CardProfile />
            </Box>
            <Box>{this.props.children}</Box>
          </Box>
        </Box>
      </Grommet>
    )
  }
}
