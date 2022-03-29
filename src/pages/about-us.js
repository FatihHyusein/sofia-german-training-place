import React from 'react';

import Layout from '../components/layout';

const HomeIndex = () => {
    return (
        <Layout>
            <main className='page-content'>
                <section>
                    <img className='img-responsive' src='/images/about-01-1920x750.jpg' alt=''
                         style={{ width: '100%' }}/>
                </section>
                <section className='section-50 section-sm-70 section-md-80 section-lg-115 bg-transparent'>
                    <div className='container'>
                        <h4>Founded by Steven Pfeiffer, Lesley Dingle and Gerald Harrison back in 1989, today their
                            Houston-based law firm is currently the #1 in both yearly cases dealt with and the
                            percentage of all those cases being won.</h4>
                        <p className='offset-top-30'>But that kind of success does not come by, just when you sit idly
                            or do not have strict work ethic principles being put into practice…</p>
                        <div className='row row-30'>
                            <div className='col-md-6'>
                                <h6>The principles of our work help us to:</h6>
                                <ul className='list text-primary list-lg offset-top-20 list-marked-line text-left offset-md-top-30'>
                                    <li>Earn our clients’ trust</li>
                                    <li>Build our reputation</li>
                                    <li>Attract thousands of individuals and businesses, all of whom (98%) have
                                        successfully dealt with their legal conundrums with our timely and diligent
                                        help…
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <h6>We’ve always cherished the three pillars which our company has always stood
                                    upon:</h6>
                                <ul className='list text-primary list-lg offset-top-20 list-marked-line text-left offset-md-top-30'>
                                    <li>A Commitment to Excellence</li>
                                    <li>A Passion for Justice</li>
                                    <li>An urge for fair pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-50 section-sm-70 section-lg-115 bg-transparent'>
                    <div className='container text-center'>
                        <h2>We stand by:</h2>
                        <div className='row row-30 justify-content-md-center'>
                            <div className='col-lg-4 col-md-6'>
                                <div className='box-info box-info-count'>
                                    <div className='box-info-content'>
                                        <div className='count'>01.</div>
                                        <h4>A Commitment to Excellence</h4>
                                        <p>While the yearly number of cases which we take totals to an insurmountable
                                            number, unparalleled by any other Houston, TX law firm, our percentage of
                                            wins is record-breaking too… Just to drop some statistics here, in more than
                                            9000 cases that we have ever taken on, a whopping 98% of those (which is
                                            9800+) were the cases which we eventually won…</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                                <div className='box-info box-info-count'>
                                    <div className='box-info-content'>
                                        <div className='count'>02.</div>
                                        <h4>A Passion for Justice</h4>
                                        <p>With our legal principles and our desire for justice being our first and
                                            foremost value, we always try to diversify the range of cases which we take
                                            on. That is perfectly shown when you notice that our civil/business cases
                                            are divided absolutely evenly. That means that besides helping good, big and
                                            small businesses we also help thousands of small men and women!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                                <div className='box-info box-info-count'>
                                    <div className='box-info-content'>
                                        <div className='count'>03.</div>
                                        <h4>An Urge for Fair Pricing</h4>
                                        <p>On par with our passion for justice and excellence, the third work ethic
                                            which we stand by is the fair pricing. While we have the most winning cases
                                            as opposed to any other Houston, TX law firm, we’ve also got the lowest
                                            pricing among them all. That is due to the simple fact, that in our opinion,
                                            a decent lawyer should charge a price that is nation-wide affordable!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-50 section-sm-75 section-md-80 section-lg-115 bg-gray-darker'>
                    <div className='container text-center'>
                        <h3>People behind our success</h3>
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
                <section className='section-50 section-sm-70 section-md-90 section-lg-115 bg-transparent'>
                    <div className='container'>
                        <h3 className='text-center'>FAQ</h3>
                        <h2 className='text-center'>The most popular questions</h2>
                        <div
                            className='card-group-custom card-group-default offset-top-40 offset-md-top-50 offset-xl-top-70'
                            id='accordion2' role='tablist' aria-multiselectable='false'>
                            <article className='card card-custom card-default card-default-arrow'>
                                <div className='card-header' id='accordion2Heading1' role='tab'>
                                    <div className='card-title'><a role='button' data-toggle='collapse'
                                                                   data-parent='#accordion2' href='#accordion2Collapse1'
                                                                   aria-controls='accordion2Collapse1'
                                                                   aria-expanded='true'>Q: Is the first consultation
                                        completely free?
                                        <div className='card-arrow'/></a>
                                    </div>
                                </div>
                                <div className='collapse show' id='accordion2Collapse1' role='tabpanel'
                                     aria-labelledby='accordion2Heading1'>
                                    <div className='card-body'><span className='text-primary'>A:</span>
                                        We understand how much of a thought should one give before making that final
                                        decision of hiring a lawyer…
                                        <p className='offset-top-15'>That is why our first consultation was, is and will
                                            always remain to be FREE of charge.</p>
                                        <p>The $1 bill that you will have to pay is plain and simple reserved solely for
                                            one technical reason. That is so a lawyer must be in at least some way hired
                                            or paid to so to be obliged to the “confidentiality rule”…</p>
                                    </div>
                                </div>
                            </article>
                            <article className='card card-custom card-default card-default-arrow'>
                                <div className='card-header' id='accordion2Heading2' role='tab'>
                                    <div className='card-title'><a className='collapsed' role='button'
                                                                   data-toggle='collapse' data-parent='#accordion2'
                                                                   href='#accordion2Collapse2'
                                                                   aria-controls='accordion2Collapse2'>Q: How will I be
                                        kept informed of my case throughout the whole process?
                                        <div className='card-arrow'/></a>
                                    </div>
                                </div>
                                <div className='collapse' id='accordion2Collapse2' role='tabpanel'
                                     aria-labelledby='accordion2Heading2'>
                                    <div className='card-body'><span className='text-primary'>A:</span>
                                        We value the huge importance of lawyer-client communication and we always keep
                                        the transparency between attorney and a client.
                                        <p className='offset-top-15'>Although we would like to talk to you bi-weekly on
                                            the phone, that would be neither practical nor productive. Legal matters are
                                            known to be stretched in time and so we think it’s best of all to keep you
                                            updated on the new comings. To you, it may often seem like ages have gone by
                                            with no activity or actions taking place. However, in reality, much
                                            behind-the-scenes paperwork never one but paralegals will do is being
                                            completed. All for a sole goal, that on the day your matter is ready with no
                                            smallest issue overlooked. In order to keep the price of legal services down
                                            while extending communications, we will work to keep you informed when
                                            anything important happens. So to respond to your questions in a reasonable
                                            time, we’ll reserve a weekly phone connection. In addition, we will inform
                                            you when your presence is required, either in our office or in court.</p>
                                    </div>
                                </div>
                            </article>
                            <article className='card card-custom card-default card-default-arrow'>
                                <div className='card-header' id='accordion2Heading3' role='tab'>
                                    <div className='card-title'><a className='collapsed' role='button'
                                                                   data-toggle='collapse' data-parent='#accordion2'
                                                                   href='#accordion2Collapse3'
                                                                   aria-controls='accordion2Collapse3'>Q: What will the
                                        legal service cost?
                                        <div className='card-arrow'/></a>
                                    </div>
                                </div>
                                <div className='collapse' id='accordion2Collapse3' role='tabpanel'
                                     aria-labelledby='accordion2Heading3'>
                                    <div className='card-body'><span className='text-primary'>A:</span>
                                        First and foremost, each of our clients is fully entitled to know exactly of the
                                        pricing. So at your very first visit, we’ll give you an approximation of what
                                        your fee will be looking like at the end of the day. We encourage a frank, open
                                        discussion about our fees with each client at the time of the first interview.
                                        <h6 className='offset-top-30'>Usually, and in our company’s case as well, the
                                            lawyer on the case gets paid under various fee arrangements. Such as:</h6>
                                        <h6 className='offset-top-30'>Hourly fee:</h6>
                                        <p className='offset-top-20 offset-md-top-30'>On an hourly fee basis, fees are
                                            based on an hourly rate for services which were provided by our team and
                                            individual lawyers and paralegals. A detailed, itemized bill will be given
                                            to you showing all work done on your case.</p>
                                        <h6>Flat fee:</h6>
                                        <p className='offset-top-20 offset-md-top-30'>When counted within the flat fee
                                            basis, your legal bill is a fixed sum for agreed upon services. In such an
                                            arrangement of fees, no in-detail accounting will be made.</p>
                                        <h6>Contingency fee:</h6>
                                        <p className='offset-top-20 offset-md-top-30'>On a contingency fee basis, your
                                            legal fees will be based on the amount of recovery and productivity we get
                                            for you in the court.</p>
                                        <p>This approach basically means – no recovery, no fee. You may have the option
                                            of choosing this plan in lieu of hourly charges. Not all cases qualify for
                                            the contingency basis; we will tell you if yours does.</p>
                                        <h6>Other potential fees:</h6>
                                        <p className='offset-top-20 offset-md-top-30'>A pre-payment type of legal fee is
                                            usually required in order to begin to process your matter and you will be
                                            kept advised as to how that pre-payment is being used. We’ll always keep you
                                            up with detailed bills and payments made on your case’s behalf.</p>
                                        <h6>Certain cases may have a minimum fee. This means that no hourly accounting
                                            will be made unless excess time is expended.</h6>
                                    </div>
                                </div>
                            </article>
                        </div>
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
