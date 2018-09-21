import React from 'react'
import { Box, Text, Image, Markdown } from 'grommet'

import siteConfig from '../../site-config'

export default () => (
  <section>
    <Box round="small" pad="medium" margin="small" background="light-2">
      <Box direction="row">
        <Box
          pad={{
            top: 'none',
            bottom: 'medium',
            right: 'medium',
            left: 'none',
          }}
          round="large"
          height="xsmall"
          width="xsmall"
        >
          <Image
            fit="contain"
            title={siteConfig.author}
            alt={siteConfig.author}
            src={siteConfig.authorImage}
          />
        </Box>
        <Box>
          <Text weight="bold" size="large">
            {siteConfig.author}
          </Text>
        </Box>
      </Box>
      <Text size="small">
        <Markdown>{siteConfig.authorBio}</Markdown>
      </Text>
    </Box>
  </section>
)
