import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import { Box, Image, Text, Heading } from 'grommet'

import styled from 'styled-components'

// Target another styled component on hover
// https://www.styled-components.com/docs/advanced#referring-to-other-components
// Psuedoelements, psuedoselectors, and nesting
// https://www.styled-components.com/docs/basics#psuedoelements-psuedoselectors-and-nesting

// https://www.gatsbyjs.org/docs/gatsby-link/
// https://reactjs.org/docs/events.html#mouse-events

export default class extends Component {
  //   const CardLink = styled.Link`
  //   color: blue;

  //   :hover {
  //     color: red;
  //   }
  // `

  render() {
    return (
      <Link
        to={this.props.link}
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          textColor: 'none',
        }}
      >
        <Box
          round="small"
          margin="small"
          elevation="small"
          background="light-2"
        >
          <Box
            basis="medium"
            fill="true"
            round="small"
            background={{ image: 'url(' + this.props.cover + ')' }}
          />
          <Box pad="medium">
            <Heading margin="xsmall" level="3">
              {this.props.title}
            </Heading>
            <Text dangerouslySetInnerHTML={this.props.htmlExcerpt} />
            <Text margin={{ top: 'small' }} size="small">
              {this.props.date}
            </Text>
          </Box>
        </Box>
      </Link>
    )
  }
}
