import React from 'react';
import OurServicesCards from './OurServicesCards';

const OurServices = () => {
    return (
        <div className='bg-[#03373D] rounded-3xl h-full px-[30px] pb-12'>
            <div className=''>
                <div className='pt-10'><h1 className='text-[#FFFFFF] text-center text-[40px]'>Our Services</h1>
                    <div className='text-center text-[#DADADA] text-[16px] pb-7'><p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to  <br />business shipments — we deliver on time, every time.</p></div></div>
            </div>
            <div >
                <OurServicesCards />
            </div>
        </div>
    );
};

export default OurServices;