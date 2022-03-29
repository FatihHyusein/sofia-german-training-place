/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"  }}) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
    if (result.errors) {
        console.error(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: path.resolve(`src/templates/post.js`),
        });
    });
};

exports.onCreateWebpackConfig = ({
                                     actions,
                                 }) => {
    const { setWebpackConfig } = actions;
    setWebpackConfig({
        externals: {
            jquery: 'jQuery', // important: 'Q' capitalized
            $: 'jQuery', // important: 'Q' capitalized
            regula: 'regula'
        },
        resolve: {
            fallback: {
                fs: false,
                path: require.resolve('path-browserify'),
                stream: require.resolve('stream-browserify'),
                util: require.resolve('util/'),
            }
        }
    });
};