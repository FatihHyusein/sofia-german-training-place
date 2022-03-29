import React from 'react';

import Layout from '../components/layout';

const HomeIndex = () => {
    return (
        <Layout>
            <main className='page-content'>
                <section className='section-50 section-sm-75 section-md-90 section-xl-115 bg-transparent'>
                    <div className='container text-center'>
                        <h3>We are ready to help you</h3>
                        <h2>Our contacts</h2>
                        <address className='offset-top-20 offset-sm-top-30'>
                            <p>87 Tennesee hwy., Alexandria, VA USA, 22303</p>
                            <div className='offset-top-15'/>
                            <span className='icon icon-lg material-icons-phone icon-primary'
                                  style={{ verticalAlign: 'sub' }}/> <a className='text-content font-weight-bold'
                                                                        href='tel:#'>800-2345-6789</a>
                        </address>
                        <div className='row'/>
                    </div>
                </section>
                <section className='section-50 section-sm-70 section-md-90 section-lg-115 bg-transparent'>
                    <div className='container text-center'>
                        <h3>Get in touch</h3>
                        <h2>Contact us</h2>
                        <form
                            className='rd-mailform text-center rd-mailform-small offset-top-30 offset-md-top-40 offset-lg-top-60'
                            data-form-output='form-output-global' data-form-type='contact' method='post'
                        >
                            <div className='form-wrap'>
                                <label className='form-label' htmlFor='contact-name'>your name</label>
                                <input className='form-input' id='contact-name' type='text' name='name'
                                       data-constraints='@Required'/>
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
                            <button className='btn btn-primary' type='submit'>Send</button>
                        </form>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default HomeIndex;
