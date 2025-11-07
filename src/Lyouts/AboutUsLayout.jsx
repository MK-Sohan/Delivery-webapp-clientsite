import React from 'react';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const AboutUsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default AboutUsLayout;