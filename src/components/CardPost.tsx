import { Link } from 'gatsby';
import { Box, Heading, Image, Text } from 'grommet';
import * as React from 'react';
import styled from 'styled-components';

// Target another styled component on hover
// https://www.styled-components.com/docs/advanced#referring-to-other-components
// Psuedoelements, psuedoselectors, and nesting
// https://www.styled-components.com/docs/basics#psuedoelements-psuedoselectors-and-nesting
const CardHover = styled.div`
  :hover {
    opacity: 0.8;
  }
`;

const CardPost = (props) => (
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
          round="small"
          elevation="small"
          border={{
            side: 'all',
            color: 'border',
            size: 'xsmall'
          }}
          margin={{
            top: 'small',
            bottom: 'medium',
            right: 'small',
            left: 'small'
          }}
        >
          {props.cover < 1 ? (
            <div />
          ) : (
            <div>
              <Box round={{ size: 'small', corner: 'top' }} overflow="hidden">
                <Box height="small" background="border">
                  <Image src={props.cover} fit="cover" />
                </Box>
              </Box>
            </div>
          )}

          <Box pad="medium">
            <Heading margin={{ vertical: 'small' }} level="2">
              {props.title}
            </Heading>
            <Text dangerouslySetInnerHTML={props.htmlExcerpt} />
            <Text margin={{ top: 'small' }} size="small">
              {props.date}
            </Text>
          </Box>
        </Box>
      </Link>
    </CardHover>
  </article>
);

export default CardPost;
