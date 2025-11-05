import React from 'react';
import Banner from '../../Banner/Banner';
import Howitworks from '../../HowItWorks/Howitworks';
import OurServices from '../../OurServices/OurServices';
import SelsTeam from '../../SelsTeam/BrandCarousel';
import ReviewCarousel from '../../Review/ReviewCarousel';
import ReviewPage from '../../Review/ReviewPage';
import FaqSection from '../../FaqSection/FaqSection';
import BrandCarousel from '../../SelsTeam/BrandCarousel';

const Home = () => {
    return (
        <div className='w-[93%] m-auto pt-11 pb-[32px]'>
            <Banner></Banner>
            <Howitworks></Howitworks>
            <OurServices></OurServices>
            <BrandCarousel></BrandCarousel>
            <ReviewPage></ReviewPage>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;