import React from 'react'
import { Link, graphql } from 'gatsby'
import { Box } from 'grommet'

export default props => {
  return (
    <Box border={{ color: 'brand', size: 'medium' }} pad="small" round="small">
      <h3>
        <Link style={{ boxShadow: 'none' }} to={props.link}>
          {props.title}
        </Link>
      </h3>
      <small>{props.date}</small>
      <p dangerouslySetInnerHTML={props.htmlExcerpt} />
    </Box>
  )
}
