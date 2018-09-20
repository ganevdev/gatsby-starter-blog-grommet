import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import { Grommet, Box, Grid, Heading, Image, Button } from 'grommet'
import { Previous as PreviousIcon, Next as NextIcon } from 'grommet-icons'

import Layout from '../components/Layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Box round="small" margin="small">
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={`${post.frontmatter.title} | ${siteTitle}`}
          />
          <Box basis="medium" fill="true">
            <Image
              round="small"
              fit="cover"
              title={post.frontmatter.title}
              alt={post.frontmatter.title}
              src={post.frontmatter.cover.childImageSharp.fluid.src}
            />
          </Box>
          <Box pad="medium">
            <Heading level="1">{post.frontmatter.title}</Heading>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Box>
        </Box>
        <Box direction="row" justify="center" gap="large" margin="medium">
          {previous && (
            <Button
              href={previous.fields.slug}
              icon={<PreviousIcon />}
              label="Previous"
            />
          )}

          {next && (
            <Button
              href={next.fields.slug}
              icon={<NextIcon />}
              label="Next"
              reverse
            />
          )}
        </Box>
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
