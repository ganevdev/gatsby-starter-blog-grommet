import { Box, Button, Heading, Image, Text } from 'grommet'
import { Link, graphql } from 'gatsby'
import { Next as NextIcon, Previous as PreviousIcon } from 'grommet-icons'
import Helmet from 'react-helmet'
import React from 'react'
import get from 'lodash/get'

import Layout from '../components/Layout'

class BlogPostTemplate extends React.Component {
  render () {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <article>
          <Box round='small' margin='small'>
            <header>
              <Helmet
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: siteDescription }]}
                title={`${post.frontmatter.title} | ${siteTitle}`}
              />

              {post.frontmatter.cover === null ? (
                ''
              ) : (
                <Box basis='medium' fill='true'>
                  <Image
                    round='small'
                    fit='cover'
                    title={post.frontmatter.title}
                    alt={post.frontmatter.title}
                    src={post.frontmatter.cover.childImageSharp.fluid.src}
                  />
                </Box>
              )}

              <Box pad={{ left: 'medium', right: 'medium', top: 'medium' }}>
                <Heading margin='small' level='1'>
                  {post.frontmatter.title}
                </Heading>
                <Text margin={{ bottom: 'small' }}>
                  {post.frontmatter.date}
                </Text>
              </Box>
            </header>
            <Box pad={{ left: 'medium', right: 'medium' }}>
              <main>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </main>
            </Box>
          </Box>
          <aside>
            <Box direction='row' justify='center' gap='large' margin='medium'>
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
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

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
