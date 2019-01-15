import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash/fp'

import CardPost from '../components/CardPost'
import Layout from '../components/Layout'

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <main>
        {posts.map(({ node }) => {
          const title = _.getOr(
            node.frontmatter.title,
            'frontmatter.title',
            node
          )
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
BlogIndex.propTypes = {
  data: PropTypes.object.isRequired
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
