import React, { Component } from 'react'
import { Grommet, Heading, Anchor, Text, Box } from 'grommet'
import siteConfig from '../../site-config'

export default () => (
  <header>
    <Box margin="small">
      <Anchor href={siteConfig.siteUrl}>
        <Heading textAlign="center" color="brand" margin="small">
          {siteConfig.title}
        </Heading>
      </Anchor>
      <Text textAlign="center" color="brand">
        {siteConfig.description}
      </Text>
    </Box>
  </header>
)
