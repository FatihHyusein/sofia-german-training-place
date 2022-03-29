import React from 'react';

import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import PracticeAreaItem from '../components/PracticeArea/PracticeAreaItem';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

function MyMapComponent() {
    const ref = React.useRef();

    React.useEffect(() => {
        const map = new window.google.maps.Map(ref.current, {
            center: { lat: -25.344, lng: 131.036 },
            zoom: 4,
        });

        const marker = new window.google.maps.Marker({
            position: { lat: -25.344, lng: 131.036 },
            map,
        });
    });

    return <div ref={ref} className={'google-map'} id='map'/>;
}

function Error() {
    return <div>Error</div>;
}

function Loader() {
    return <div>Loading...</div>;
}

const renderMapFallback = (status) => {
    switch (status) {
        case Status.LOADING:
            return <Loader/>;
        case Status.FAILURE:
            return <Error/>;
        case Status.SUCCESS:
            return <MyMapComponent/>;
    }
};
const HomeIndex = ({
                       data: {
                           allMarkdownRemark: { edges }, practiceAreas
                       },
                   }) => {

    React.useEffect(() => {

    }, []);

    return (<Layout>
        <main className='page-content'>
            <section>
                <Carousel showArrows
                          infiniteLoop
                          showThumbs={false}
                          showStatus={false}
                          sx={{
                              xs: {
                                  mt: 5
                              }
                          }}
                >
                    <div>
                        <img src='images/custom/home-slide-1.jpg'/>
                        <p className='legend'>Legend 1</p>
                    </div>
                    <div>
                        <img src='images/slide-2.jpg'/>
                        <p className='legend'>Legend 2</p>
                    </div>
                </Carousel>
            </section>
            <section className='section-50 section-sm-65 section-md-85 section-lg-115'>
                <div className='container text-center'>
                    <h2>Practice areas</h2>
                    <div
                        className='row row-60 justify-content-sm-center row-xl offset-top-65 offset-md-top-80 offset-xl-top-95'>
                        <PracticeAreaItem item={{
                            ...practiceAreas.edges[0].node.frontmatter, html: practiceAreas.edges[0].node.html
                        }}/>
                        <PracticeAreaItem item={{
                            ...practiceAreas.edges[1].node.frontmatter, html: practiceAreas.edges[1].node.html
                        }}/>
                        <PracticeAreaItem item={{
                            ...practiceAreas.edges[2].node.frontmatter, html: practiceAreas.edges[2].node.html
                        }}/>
                    </div>
                </div>
            </section>
            <section className='section-50 section-sm-65 section-md-85 section-xl-115 bg-gray-darker'>
                <div className='container text-center'>
                    <h2>Meet our team</h2>
                    <div className='row row-40 row-xl-50'>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='d-inline-block person-block'><img className='img-responsive'
                                                                              src='/images/about-02-387x381.jpg'
                                                                              alt='' width='387' height='381'/>
                                <h4 className='offset-top-20'>Richard Walker</h4>
                                <p>While Richard is our most experienced paralegal, he’s also our client’s favorite
                                    one. Working for some time as a legal mediator, he knows how to approach people
                                    in different walks of life…</p>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='d-inline-block person-block'><img className='img-responsive'
                                                                              src='/images/about-03-387x381.jpg'
                                                                              alt='' width='387' height='381'/>
                                <h4 className='offset-top-20'>Gerald Harrison</h4>
                                <p>Gerald is Lesley’s brother, an Ivy League graduate and a proven lawyer, who’ve
                                    worked both in NYC and Texas during his 45 years long career…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='google-map'>
                    <Wrapper apiKey={''}
                             render={renderMapFallback}>
                        {/*<YourComponent/>*/}
                    </Wrapper>
                </div>
                {/*<div className='google-map-container' data-center='9870 St Vincent Place, Glasgow, DC 45 Fr 45.'*/}
                {/*     data-zoom='5' data-icon='images/gmap_marker.png' data-icon-active='images/gmap_marker_active.png'*/}
                {/*     data-styles='[{&quot;featureType&quot;:&quot;water&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#e9e9e9&quot;},{&quot;lightness&quot;:17}]},{&quot;featureType&quot;:&quot;landscape&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f5f5f5&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:17}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:29},{&quot;weight&quot;:0.2}]},{&quot;featureType&quot;:&quot;road.arterial&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:18}]},{&quot;featureType&quot;:&quot;road.local&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:16}]},{&quot;featureType&quot;:&quot;poi&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f5f5f5&quot;},{&quot;lightness&quot;:21}]},{&quot;featureType&quot;:&quot;poi.park&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#dedede&quot;},{&quot;lightness&quot;:21}]},{&quot;elementType&quot;:&quot;labels.text.stroke&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;on&quot;},{&quot;color&quot;:&quot;#ffffff&quot;},{&quot;lightness&quot;:16}]},{&quot;elementType&quot;:&quot;labels.text.fill&quot;,&quot;stylers&quot;:[{&quot;saturation&quot;:36},{&quot;color&quot;:&quot;#333333&quot;},{&quot;lightness&quot;:40}]},{&quot;elementType&quot;:&quot;labels.icon&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;transit&quot;,&quot;elementType&quot;:&quot;geometry&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#f2f2f2&quot;},{&quot;lightness&quot;:19}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#fefefe&quot;},{&quot;lightness&quot;:20}]},{&quot;featureType&quot;:&quot;administrative&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#fefefe&quot;},{&quot;lightness&quot;:17},{&quot;weight&quot;:1.2}]}]'>*/}

                {/*    <ul className='google-map-markers'>*/}
                {/*        <li data-location='9870 St Vincent Place, Glasgow, DC 45 Fr 45.'*/}
                {/*            data-description='9870 St Vincent Place, Glasgow'/>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </section>
            <section className='section-50 section-sm-65 section-md-85 section-xl-115'>
                <div className='container text-center'>
                    <h3>Request a consultation</h3>
                    <h2>Ask our attorneys</h2>
                    <div className='row justify-content-md-center row-md'>
                        <div className='col-lg-10 col-xl-8 col-xxl-6'>
                            <p>Would you like to speak to one of our lawyers? Just submit your contact details
                                and we’ll be in touch shortly. You can also email us if you prefer that type of
                                communication.</p>
                            <h6>I would like to discuss</h6>
                            <form className='rd-mailform text-center' data-form-output='form-output-global'
                                  data-form-type='contact' method='post'>
                                <div className='form-wrap'>
                                    <label className='form-label' htmlFor='contact-subject'>Your subject</label>
                                    <input className='form-input' id='contact-subject' type='text'
                                           name='subject' data-constraints='@Required'/>
                                </div>
                                <div className='form-wrap'>
                                    <label className='form-label' htmlFor='contact-name'>Your name</label>
                                    <input className='form-input' id='contact-name' type='text' name='name'
                                           data-constraints='@Required'/>
                                </div>
                                <div className='form-wrap'>
                                    <label className='form-label' htmlFor='contact-email'>Your e-mail</label>
                                    <input className='form-input' id='contact-email' type='email' name='email'
                                           data-constraints='@Email @Required'/>
                                </div>
                                <button className='btn btn-primary' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </Layout>);
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
    practiceAreas: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/practice-areas/"  }}, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`;


export default HomeIndex;
