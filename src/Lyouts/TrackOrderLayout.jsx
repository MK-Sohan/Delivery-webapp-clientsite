import React from 'react';
import TrackYourOrder from '../Pages/TrackYourOrder/TrackYourOrder';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const TrackOrderLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TrackYourOrder></TrackYourOrder>
            <Footer></Footer>
        </div>
    );
};

export default TrackOrderLayout;