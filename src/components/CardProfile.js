import React from 'react'
import { Box, Text } from 'grommet'

import profilePic from './profile-pic.jpg'

export default () => {
  return (
    <Box
      round="small"
      pad="small"
      margin="small"
      background="light-2"
      // border={{ size: 'small', color: 'brand' }}
    >
      <img src={profilePic} alt={`Kyle Mathews`} />
      <Text size="small">
        Written by <strong>Kyle Mathews</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </Text>
    </Box>
  )
}
