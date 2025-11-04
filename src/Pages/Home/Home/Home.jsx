import React from 'react';
import Banner from '../../Banner/Banner';
import Howitworks from '../../HowItWorks/Howitworks';
import OurServices from '../../OurServices/OurServices';

const Home = () => {
    return (
        <div className='w-[93%] m-auto pt-11 pb-[32px]'>
            <Banner></Banner>
            <Howitworks></Howitworks>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;