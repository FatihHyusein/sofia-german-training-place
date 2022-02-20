import React from 'react';

import Footer from './Footer';
import avatar from '../assets/images/avatar.jpg';
import { Link } from 'gatsby';

const Header = () => (
    <header id='header'>
        <div className='inner'>
            <Link to='/' className='image avatar'><img src={avatar} alt=''/></Link>
            <h1>
                <strong>I am Strata</strong>, a super simple
                <br/>
                responsive site template freebie
                <br/>
                crafted by <a href='http://html5up.net'>HTML5 UP</a>.
            </h1>
        </div>
        <Footer/>
    </header>
);

export default Header;
