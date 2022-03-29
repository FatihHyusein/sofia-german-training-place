import React from 'react';

import Layout from '../components/layout';
import PracticeAreaGroup from '../components/PracticeArea/PracticeAreaGroup';
import { graphql } from 'gatsby';

const HomeIndex = ({
                       data
                   }) => {
    const groups = {};

    data.allMarkdownRemark.edges.forEach((item) => {
        groups[item.node.frontmatter.category] ? groups[item.node.frontmatter.category].push({
            ...item.node.frontmatter,
            html: item.node.html
        }) : groups[item.node.frontmatter.category] = [{
            ...item.node.frontmatter,
            html: item.node.html
        }];
    });

    return (
        <Layout>
            <main className='page-content'>
                <section><img className='img-responsive' src='/images/practice-areas-01-1920x750.jpg' alt=''
                              style={{ width: '100%' }}/></section>
                <section className='section-50 section-sm-65 section-md-85 section-lg-95 section-xl-115 bg-transparent'>
                    <div className='container text-center'>
                        <h3>Our specialization</h3>
                        <h2>Practice areas</h2>
                        {Object.entries(groups).map(([group, items], idx) => (
                            <PracticeAreaGroup key={idx} group={group} items={items} groupIdx={idx}/>
                        ))}
                    </div>
                </section>
                <section className='section-50 section-sm-70 section-md-90 section-xl-115 bg-transparent'>
                    <div className='container text-center'>
                        <h3>Request a consultation</h3>
                        <h2>Ask our attorneys</h2>
                        <p className='offset-top-30 rd-mailform-middle'>Would you like to speak to one of our lawyers?
                            Just submit your contact details and we’ll be in touch shortly. You can also email us if you
                            prefer that type of communication.</p>
                        <form className='rd-mailform text-center rd-mailform-middle offset-top-30'
                              data-form-output='form-output-global' data-form-type='contact' method='post'
                        >
                            <div className='form-wrap'>
                                <select className='form-input select-filter' data-placeholder='choose your subject'
                                        data-minimum-results-for-search='Infinity' data-constraints='@Required'>
                                    <option value=''>not</option>
                                    <option value='2'>Human resources planning</option>
                                    <option value='3'>Business plan consulting</option>
                                    <option value='4'>Exit planning</option>
                                    <option value='5'>Interim managers</option>
                                    <option value='6'>Strategic planning</option>
                                    <option value='7'>Market research</option>
                                    <option value='8'>Conflict Management</option>
                                    <option value='9'>Governance</option>
                                    <option value='10'>Mergers</option>
                                    <option value='11'>Acquisitions</option>
                                    <option value='12'>Other</option>
                                </select>
                            </div>
                            <div className='form-wrap'>
                                <label className='form-label' htmlFor='contact-email-form'>your e-mail</label>
                                <input className='form-input' id='contact-email-form' type='email' name='email'
                                       data-constraints='@Email @Required'/>
                            </div>
                            <div className='form-wrap'>
                                <label className='form-label' htmlFor='contact-message'>Message</label>
                                <textarea className='form-input' id='contact-message' name='message'
                                          data-constraints='@Required'/>
                            </div>
                            <button className='btn btn-primary' type='submit'>Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/practice-areas/"  }}, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            price
            category
          }
        }
      }
    }
  }
`;


export default HomeIndex;
