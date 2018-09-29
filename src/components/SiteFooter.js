import React from 'react'
import { Box, Markdown } from 'grommet'
import siteConfig from '../../site-config'

export default () => (
  <footer>
    <Box background='light-2' pad='large' align='center'>
      <Markdown>{siteConfig.footerText}</Markdown>
    </Box>
  </footer>
)
