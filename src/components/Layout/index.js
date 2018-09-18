import React, { Component } from 'react'
import { Grommet, Box, Grid } from 'grommet'

import { siteConfigTheme } from './site-config-theme'
import siteConfig from '../../../site-config'

import Navbar from '../Navbar'
import CardProfile from '../CardProfile'

export default class Template extends Component {
  render() {
    return (
      <Grommet theme={siteConfigTheme}>
        <Box
          background={siteConfig.backgroundColor}
          style={{ minHeight: '100vh' }}
        >
          <Navbar />
          <Grid
            areas={[
              { name: 'nav', start: [0, 0], end: [0, 0] },
              { name: 'side', start: [0, 0], end: [0, 0] },
              { name: 'main', start: [1, 0], end: [1, 0] },
              { name: 'footer', start: [0, 1], end: [2, 1] },
            ]}
            columns={['small', 'flex', 'medium']}
            rows={['medium', 'small']}
            gap="small"
          >
            <Box gridArea="nav" background="brand" />
            <Box gridArea="side" background="brand">
              <CardProfile />
            </Box>
            <Box gridArea="main" background="brand">
              {this.props.children}
            </Box>
            <Box gridArea="footer" background="accent-1" />
          </Grid>
        </Box>
      </Grommet>
    )
  }
}
