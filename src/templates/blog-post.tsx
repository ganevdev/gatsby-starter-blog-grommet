import { navigate, graphql } from 'gatsby';
import { Box, Button, Heading, Image, Text } from 'grommet';
import { Next as NextIcon, Previous as PreviousIcon } from 'grommet-icons';
import * as _ from 'lodash/fp';
import * as React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';

interface BlogPostProps {
  data: {
    markdownRemark: {
      excerpt: string;
      frontmatter: {
        title: string;
        cover?: {
          childImageSharp: { fluid: { src: string } };
        };
        date?: string;
      };
      html: string;
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: {
    previous: any;
    next: any;
  };
}

const blogPost = ({ data, pageContext: { previous, next } }: BlogPostProps) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = post.excerpt;
  return (
    <Layout>
      <div>
        <article>
          <Box round="small" margin="small">
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: siteDescription }]}
              title={post.frontmatter.title + '|' + siteTitle}
            />
            <div>
              <header>
                {post.frontmatter.cover ? (
                  <Box round={{ size: 'small' }} overflow="hidden">
                    <Box basis="medium" fill={true}>
                      <Image
                        fit="cover"
                        title={post.frontmatter.title}
                        alt={post.frontmatter.title}
                        src={post.frontmatter.cover.childImageSharp.fluid.src}
                      />
                    </Box>
                  </Box>
                ) : (
                  ''
                )}

                <Box pad={{ horizontal: 'medium' }}>
                  <Heading
                    margin={{ top: 'large', bottom: 'small' }}
                    level="1"
                  >
                    {post.frontmatter.title}
                  </Heading>
                  <Text margin={{ bottom: 'small' }}>
                    {post.frontmatter.date}
                  </Text>
                </Box>
              </header>
            </div>
            <Box pad={{ horizontal: 'medium' }}>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Box>
          </Box>
        </article>
        <aside>
          <Box direction="row" justify="center" gap="large" margin="large">
            {previous && (
              <Button
                onClick={() => navigate(previous.fields.slug)}
                icon={<PreviousIcon />}
                label="Previous"
                hoverIndicator
              />
            )}

            {next && (
              <Button
                onClick={() => navigate(next.fields.slug)}
                icon={<NextIcon />}
                label="Next"
                reverse={true}
                hoverIndicator
              />
            )}
          </Box>
        </aside>
      </div>
    </Layout>
  );
};

export default blogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp {
            fluid(maxWidth: 1024) {
              src
            }
          }
        }
      }
    }
  }
`;
