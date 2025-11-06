import React from 'react';
import bannerImage from '../../assets/banner/banner1.png'
import bannerImage2 from '../../assets/banner/banner2.png'
import bannerImage3 from '../../assets/banner/banner3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (

        <Carousel ariaLabel={false} showArrows={false} showIndicators={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={500} swipeable={true} emulateTouch={true}>
            <div className='flex justify-center'>
                <img src={bannerImage} alt="" />
            </div>
            <div className='flex justify-center'>
                <img src={bannerImage2} alt="" />
            </div>
            <div className='flex justify-center'>
                <img src={bannerImage3} alt="" />
            </div>
        </Carousel>
    );
};

export default Banner;