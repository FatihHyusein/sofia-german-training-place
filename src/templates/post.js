import React from 'react';
import { graphql } from 'gatsby';
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
            <main className='page-content'>
                <section className='section-50 section-sm-70 section-xl-115 bg-transparent'>
                    <div className='container'>
                        <div className='row row-20'>
                            <div className='col-xl-12 col-xxl-12'>
                                <div className='inset-xl-right-45 inset-xxl-right-0'>
                                    <article className='news-post'>
                                        <div className='news-post-header'>
                                            <Img fluid={featuredImgFluid} className='img-responsive'
                                                 style={{ width: '100%' }}/>
                                        </div>
                                        <div className='news-post-body'>
                                            <h2>{frontmatter.title} ({frontmatter.date})</h2>
                                        </div>
                                        <div className='news-post-body' dangerouslySetInnerHTML={{ __html: html }}/>
                                        <div className='news-post-body'>
                                            <div
                                                className='d-sm-flex align-items-sm-center offset-top-30 justify-content-sm-center justify-content-lg-start'>
                                                <h4>Share:</h4>
                                                <div className='preffix-sm-left-15 offset-top-20 offset-sm-top-0'>
                                                    <div className='group group-xs'>
                                                        <div>
                                                            <a className='icon-round-small icon-xs icon icon-primary fa-facebook'
                                                               href='https://facebook.com' aria-label={'facebook'}/>
                                                        </div>
                                                        <div>
                                                            <a className='icon-round-small icon-xs icon icon-primary fa-linkedin'
                                                               href='https://linkedin.com' aria-label={'linkedin'}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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