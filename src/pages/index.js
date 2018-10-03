import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import React, { Component } from 'react'
import get from 'lodash/get'

import CardPost from '../components/CardPost'
import Layout from '../components/Layout'

class BlogIndex extends Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <main>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                {node.frontmatter.cover === null ? (
                  <CardPost
                    link={node.fields.slug}
                    // cover={node.frontmatter.cover.childImageSharp.fluid.src}
                    cover=''
                    title={title}
                    date={node.frontmatter.date}
                    htmlExcerpt={{ __html: node.excerpt }}
                  />
                ) : (
                  <CardPost
                    link={node.fields.slug}
                    cover={node.frontmatter.cover.childImageSharp.fluid.src}
                    // cover="/stop.jpg"
                    title={title}
                    date={node.frontmatter.date}
                    htmlExcerpt={{ __html: node.excerpt }}
                  />
                )}
              </div>
            )
          })}
        </main>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            cover {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
