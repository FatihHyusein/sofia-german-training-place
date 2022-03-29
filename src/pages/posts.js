import React from 'react';

import Layout from '../components/layout';
import { graphql } from 'gatsby';
import PostItem from '../components/Posts/components/PostItem';

const PostsPage = ({
                       data: {
                           allMarkdownRemark: { edges },
                       },
                   }) => {
    return (
        <Layout>
            <main className='page-content'>
                <section className='section-50 section-sm-65 section-md-85 section-xl-115 bg-transparent'>
                    <div className='container'>
                        <div className='row row-20'>
                            <div className='col-xl-12 col-xxl-12'>
                                <div className='inset-lg-right-45 inset-xl-right-0'>
                                    {
                                        edges.map((obj, i) => {
                                            return (<PostItem
                                                post={obj}
                                                key={i}
                                            />);
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"  }}, sort: { order: DESC, fields: [frontmatter___date] }) {
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
