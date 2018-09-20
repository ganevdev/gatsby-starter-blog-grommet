import React from 'react'
import { Box, Text } from 'grommet'
import siteConfig from '../../site-config'

export default () => {
  return (
    <Box background="light-2" pad="large">
      <Text>{siteConfig.footerText}</Text>
    </Box>
  )
}
