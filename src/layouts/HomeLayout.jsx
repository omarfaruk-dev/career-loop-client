import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const HomeLayout = () => {
    return (
        <div>
            <header className='cox-bazar-img'>
            {/* <NavBar></NavBar> */}
            <Hero></Hero>
            </header>

        </div>
    );
};

export default HomeLayout;