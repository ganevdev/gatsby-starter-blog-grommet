const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx');

  const allMarkdownRemark = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  // <== Previous and Next ==> posts functions
  function postsIndexPrevious(posts, index) {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    return previous;
  }
  function postsIndexNext(posts, index) {
    const next = index === 0 ? null : posts[index - 1].node;
    return next;
  }
  function createPagesFun(graphql, template) {
    const posts = graphql.data.allMarkdownRemark.edges;
    posts.forEach((post, index) => {
      createPage({
        path: post.node.fields.slug,
        component: template,
        context: {
          slug: post.node.fields.slug,
          previous: postsIndexPrevious(posts, index),
          next: postsIndexNext(posts, index)
        }
      });
    });
  }
  await createPagesFun(allMarkdownRemark, blogPostTemplate);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
