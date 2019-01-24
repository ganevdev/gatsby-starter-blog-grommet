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

interface CardPostProps {
    link: string;
    cover?: string;
    title: string;
    excerpt?: string;
    date?: string;
}

const CardPost = (props: CardPostProps) => (
    <article>
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
            <CardHover>
                <Link
                    to={props.link}
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        textColor: 'none'
                    }}
                >
                    {props.cover ? (
                        <div>
                            <Box round={{ size: 'small', corner: 'top' }} overflow="hidden">
                                <Box height="small" background="border">
                                    <Image src={props.cover} fit="cover" />
                                </Box>
                            </Box>
                        </div>
                    ) : (
                        <div />
                    )}

                    <Box pad="medium">
                        <Heading margin={{ vertical: 'small' }} level="2">
                            {props.title}
                        </Heading>
                        <Text>{props.excerpt}</Text>
                        <Text margin={{ top: 'small' }} size="small">
                            {props.date}
                        </Text>
                    </Box>
                </Link>
            </CardHover>
        </Box>
    </article>
);

export default CardPost;
