import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Header = () => {
    const location = useLocation();

    function isLocationActive(locationName) {
        return location.pathname === locationName || location.pathname === locationName + '/' ? 'active' : '';
    }

    return <header className='page-head'>
        <div className='rd-navbar-wrap'>
            <nav className='rd-navbar' data-layout='rd-navbar-fixed' data-sm-layout='rd-navbar-fixed'
                 data-sm-device-layout='rd-navbar-fixed' data-md-layout='rd-navbar-fixed'
                 data-md-device-layout='rd-navbar-fixed' data-lg-layout='rd-navbar-static'
                 data-lg-device-layout='rd-navbar-static' data-xl-layout='rd-navbar-static'
                 data-xl-device-layout='rd-navbar-static' data-xxl-layout='rd-navbar-static'
                 data-xxl-device-layout='rd-navbar-static' data-lg-stick-up-offset='261px'>
                <div className='rd-navbar-inner rd-navbar-inner-top'>
                    <div className='rd-navbar-panel'>
                        <div className='rd-navbar-call'>
                            <span className='icon icon-sm icon-rounded material-design-write20 icon-primary'/>
                            <a href='mailto:#' style={{ marginRight: 10 }}>nim1985@abv.bg</a></div>
                        <div className='rd-navbar-call'>
                            <span className='icon icon-sm icon-rounded material-icons-local_phone icon-primary'/><a
                            href='tel:#'>0888751082</a>
                        </div>
                    </div>
                </div>
                <div className='rd-navbar-inner rd-navbar-inner-bottom'
                >
                    <Link className='brand-name' to='/'
                          style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '1rem 0'
                          }}>
                        <img src='/images/favicon.ico' alt='' width='48' height='48'
                             style={{ display: 'flex', alignItems: 'center', }}/>
                        <h2 style={{ color: 'black', display: 'inline' }}>KlasseNzimmer</h2>
                    </Link>
                </div>
            </nav>
        </div>
    </header>;
};

export default Header;
