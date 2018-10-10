import { Box, Button, Image, Markdown, Text } from 'grommet'
import { Github, Reddit, Twitter } from 'grommet-icons'
import React from 'react'

import siteConfig from '../../site-config'

export default () => (
  <div>
    <Box round='small' pad='medium' margin='small' background='light-2'>
      <Box direction='row'>
        <Box
          pad={{
            top: 'none',
            bottom: 'medium',
            right: 'medium',
            left: 'none'
          }}
          round='large'
          height='xsmall'
          width='xsmall'
        >
          <Image
            fit='contain'
            title={siteConfig.author}
            alt={siteConfig.author}
            src={siteConfig.authorImage}
          />
        </Box>
        <Box>
          <Text weight='bold' size='large' margin={{ left: 'small' }}>
            {siteConfig.author}
          </Text>
          <Box direction='row'>
            {siteConfig.social.twitter.length > 1 ? (
              <Button
                href={`https://twitter.com/${siteConfig.social.twitter}`}
                icon={<Twitter size='small' />}
              />
            ) : (
              ''
            )}

            {siteConfig.social.github.length > 1 ? (
              <Button
                href={`https://github.com/${siteConfig.social.github}`}
                icon={<Github size='small' />}
              />
            ) : (
              ''
            )}

            {siteConfig.social.reddit.length > 1 ? (
              <Button
                href={`https://reddit.com/user/${siteConfig.social.reddit}`}
                icon={<Reddit size='small' />}
              />
            ) : (
              ''
            )}
          </Box>
        </Box>
      </Box>
      <Text size='small'>
        <Markdown>{siteConfig.authorBio}</Markdown>
      </Text>
    </Box>
  </div>
)
