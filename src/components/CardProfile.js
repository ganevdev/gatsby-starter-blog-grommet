import React from 'react'
import { Box } from 'grommet'

import profilePic from './profile-pic.jpg'

export default () => {
  return (
    <Box border={{ color: 'brand', size: 'medium' }} pad="small" round="small">
      <img src={profilePic} alt={`Kyle Mathews`} />
      <p>
        Written by <strong>Kyle Mathews</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href="https://twitter.com/kylemathews">
          You should follow him on Twitter
        </a>
      </p>
    </Box>
  )
}
