import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Img from 'gatsby-image';

export default function Template({ data }) {
    const { markdownRemark } = data; // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark;

    let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

    return (
        <Layout>
            <Helmet>
                <title>{frontmatter.title}</title>
                <meta name='description' content={frontmatter.title}/>
            </Helmet>
            <div id='main' className={'blog'}>
                <section id='two'>
                    <Link to='/posts' className='button'>Posts</Link>
                    <h2>{frontmatter.title} ({frontmatter.date})</h2>
                    <Img fluid={featuredImgFluid}/>
                    <div
                        className='blog-post-content'
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </section>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
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
`;