import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
    <footer className='page-footer'>
        <div className='container'>
            <div className='row row-40 justify-content-md-around justify-content-xl-start text-md-left'>
                <div className='col-xl-6 col-xxl-6 col-lg-6 col-md-6'>
                    <a href='/'><img
                        className='brand-footer' src='/images/logo-inverse-398x97.png' alt='' width='199'
                        height='48'/><br/>
                        <p style={{ width: '199px', textAlign: 'right' }}>einmal anders!</p>
                    </a>
                    <p></p>

                </div>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                    <h5>Контакти</h5>
                    <address>
                        <p>ж.к. „Стрелбище“<br/>
                            ул. Йордан Йовков бл. 8В, партер
                            <br/>София
                        </p>
                        <a href='mailto:#'>nim1985@abv.bg</a>
                        {/*<ul className='list-inline list-inline-lg'>*/}
                        {/*  <li><a className='icon icon-white icon-xs fa-facebook' href='https://facebook.com' aria-label={'facebook'}/></li>*/}
                        {/*  <li><a className='icon icon-white icon-xs fa-linkedin' href='https://linkedin.com' aria-label={'linkedin'}/></li>*/}
                        {/*</ul>*/}
                    </address>
                </div>
                {/*<div className='col-md-5 col-xl-3 col-xxl-3 col-lg-3'>*/}
                {/*  /!*<h5>We are working on</h5>*!/*/}
                {/*  /!*<div className='list-terms-footer'>*!/*/}
                {/*  /!*  <dl>*!/*/}
                {/*  /!*    <dt>Mon-Thu:</dt>*!/*/}
                {/*  /!*    <dd>9:30 - 21:00</dd>*!/*/}
                {/*  /!*  </dl>*!/*/}
                {/*  /!*  <dl>*!/*/}
                {/*  /!*    <dt>Fri:</dt>*!/*/}
                {/*  /!*    <dd>6:00 - 21:00</dd>*!/*/}
                {/*  /!*  </dl>*!/*/}
                {/*  /!*  <dl>*!/*/}
                {/*  /!*    <dt>Sat:</dt>*!/*/}
                {/*  /!*    <dd>10:00 - 15:00</dd>*!/*/}
                {/*  /!*  </dl>*!/*/}
                {/*  /!*</div>*!/*/}
                {/*</div>*/}
            </div>
            <div className='row text-center offset-top-55'>
                <div className='col-lg-12'>
                    <p className='copyright'><span className='copyright-year'/>    &#169;    KlasseNzimmer.
                        All Rights Reserved<span className='divider-vertical'>|</span> <Link
                            to='/privacy-policy'>Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
