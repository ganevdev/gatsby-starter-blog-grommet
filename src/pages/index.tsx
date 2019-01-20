import { graphql } from 'gatsby';
import * as _ from 'lodash/fp';
import * as React from 'react';
import Helmet from 'react-helmet';

import CardPost from '../components/CardPost';
import Layout from '../components/Layout';

const BlogIndex = (props) => {
  const siteTitle = props.data.site.siteMetadata.title;
  const siteDescription = props.data.site.siteMetadata.description;
  const posts = props.data.allMarkdownRemark.edges;

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
          );
          return (
            <div key={node.fields.slug}>
              {node.frontmatter.cover === null ? (
                <CardPost
                  link={node.fields.slug}
                  cover=""
                  title={title}
                  date={node.frontmatter.date}
                  htmlExcerpt={{ __html: node.excerpt }}
                />
              ) : (
                <CardPost
                  link={node.fields.slug}
                  cover={node.frontmatter.cover.childImageSharp.fluid.src}
                  title={title}
                  date={node.frontmatter.date}
                  htmlExcerpt={{ __html: node.excerpt }}
                />
              )}
            </div>
          );
        })}
      </main>
    </Layout>
  );
};

export default BlogIndex;

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
`;
