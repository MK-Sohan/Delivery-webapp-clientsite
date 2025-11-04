import React from 'react';
import bannerImage from '../../assets/banner/banner1.png'
const Banner = () => {
    return (
        <div className='flex justify-center'>
            <img src={bannerImage} alt="" />
        </div>
    );
};

export default Banner;