import React from 'react';
import Pricing from '../Pages/Pricing/Pricing';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const PricingLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Pricing></Pricing>
            <Footer></Footer>
        </div>
    );
};

export default PricingLayout;