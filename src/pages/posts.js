import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Posts from '../components/Posts';

const PostsPage = ({
                       data: {
                           allMarkdownRemark: { edges },
                       },
                   }) => {
    const siteTitle = 'TEST Site Title';
    const siteDescription = 'Site description';

    return (
        <Layout>
            <Helmet>
                <title>{siteTitle}</title>
                <meta name='description' content={siteDescription}/>
            </Helmet>

            <div id='main'>
                <section id='two'>
                    <h2>Posts</h2>

                    <Posts posts={edges}/>
                </section>
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default PostsPage;
