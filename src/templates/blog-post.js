import { Box, Button, Heading, Image, Text } from 'grommet'
import { Link, graphql } from 'gatsby'
import { Next as NextIcon, Previous as PreviousIcon } from 'grommet-icons'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash/fp'

import Layout from '../components/Layout'

const blogPost = (props) => {
  const post = props.data.markdownRemark
  const siteTitle = _.get(props, 'data.site.siteMetadata.title')
  const siteDescription = post.excerpt
  const { previous, next } = props.pageContext
  return (
    <Layout location={props.location}>
      <div>
        <article>
          <Box round='small' margin='small'>
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              meta={[{ name: 'description', content: siteDescription }]}
              title={post.frontmatter.title + '|' + siteTitle}
            />
            <div>
              <header>
                {post.frontmatter.cover === null ? (
                  ''
                ) : (
                  <Box round={{ size: 'small' }} overflow='hidden'>
                    <Box basis='medium' fill>
                      <Image
                        fit='cover'
                        title={post.frontmatter.title}
                        alt={post.frontmatter.title}
                        src={post.frontmatter.cover.childImageSharp.fluid.src}
                      />
                    </Box>
                  </Box>
                )}

                <Box pad='medium'>
                  <Heading margin={{ vertical: 'small' }} level='1'>
                    {post.frontmatter.title}
                  </Heading>
                  <Text margin={{ bottom: 'small' }}>
                    {post.frontmatter.date}
                  </Text>
                </Box>
              </header>
            </div>
            <Box pad='medium'>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Box>
          </Box>
        </article>
        <aside>
          <Box direction='row' justify='center' gap='large' margin='large'>
            {previous && (
              <Link to={previous.fields.slug}>
                <Button onClick icon={<PreviousIcon />} label='Previous' />
              </Link>
            )}

            {next && (
              <Link to={next.fields.slug}>
                <Button onClick icon={<NextIcon />} label='Next' reverse />
              </Link>
            )}
          </Box>
        </aside>
      </div>
    </Layout>
  )
}
blogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object
}

export default blogPost

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
`
