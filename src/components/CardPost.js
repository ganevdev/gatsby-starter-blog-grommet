import { Box, Heading, Text } from 'grommet'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

// Target another styled component on hover
// https://www.styled-components.com/docs/advanced#referring-to-other-components
// Psuedoelements, psuedoselectors, and nesting
// https://www.styled-components.com/docs/basics#psuedoelements-psuedoselectors-and-nesting
const CardHover = styled.div`
  :hover {
    opacity: 0.8;
  }
`

const BoxCover = styled(Box)`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`

export default props => {
  return (
    <article>
      <CardHover>
        <Link
          to={props.link}
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            textColor: 'none'
          }}
        >
          <Box
            round='small'
            elevation='small'
            background='light-1'
            margin={{
              top: 'small',
              bottom: 'medium',
              right: 'small',
              left: 'small'
            }}
          >
            {props.cover < 1 ? (
              ''
            ) : (
              <BoxCover
                basis='medium'
                fill='true'
                background={{ image: `url(${props.cover})` }}
              />
            )}

            <Box pad='medium'>
              <Heading margin='xsmall' level='2'>
                {props.title}
              </Heading>
              <Text dangerouslySetInnerHTML={props.htmlExcerpt} />
              <Text margin={{ top: 'small' }} size='small'>
                {props.date}
              </Text>
            </Box>
          </Box>
        </Link>
      </CardHover>
    </article>
  )
}
