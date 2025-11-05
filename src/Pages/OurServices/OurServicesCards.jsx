import React from 'react';
import icon from '../../assets/service.png'

const OurServicesCards = () => {
    return (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-center items-center  ">
            <div className='bg-white rounded-4xl px-4 py-[25px] shadow-md  h-[286px] hover:bg-[#CAEB66] esease-in-out duration-300'>
                <div className='   mx-auto  flex flex-col items-center text-center  '>
                    <div className='shadow-2xl w-[70px] h-[70px] p-3  flex justify-center bg-amber-50 rounded-full'><img className='w-[45px] h-[45px]' src={icon} alt="" /></div>
                    <div className='  mt-4'>
                        <div className='font-bold text-[20px] w-[]'><h3>Express  & Standard <br /> Delivery</h3></div>
                        <div className=' text-center text-[14px]  pt-3'><p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p></div>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-4xl px-4 py-[40px] shadow-md h-[286px] hover:bg-[#CAEB66] esease-in-out duration-300'>
                <div className='   mx-auto  flex flex-col items-center text-center   '>
                    <div className='shadow-2xl w-[70px] h-[70px] p-3  flex justify-center bg-amber-50 rounded-full'><img className='w-[45px] h-[45px]' src={icon} alt="" /></div>
                    <div className='  mt-4'>
                        <div className='font-bold text-[20px] w-[]'><h3>Nationwide Delivery</h3></div>
                        <div className=' text-center text-[14px]  pt-3'><p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p></div>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-4xl px-4 py-[40px] shadow-md  h-[286px] hover:bg-[#CAEB66] esease-in-out duration-300'>
                <div className='   mx-auto  flex flex-col items-center text-center   '>
                    <div className='shadow-2xl w-[70px] h-[70px] p-3  flex justify-center bg-amber-50 rounded-full'><img className='w-[45px] h-[45px]' src={icon} alt="" /></div>
                    <div className='  mt-4'>
                        <div className='font-bold text-[20px] w-[]'><h3>Fulfillment Solution</h3></div>
                        <div className=' text-center text-[14px]  pt-3'><p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p></div>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-4xl px-4 py-[40px] shadow-md  h-[286px] hover:bg-[#CAEB66] esease-in-out duration-300'>
                <div className='   mx-auto  flex flex-col items-center text-center   '>
                    <div className='shadow-2xl w-[70px] h-[70px] p-3  flex justify-center bg-amber-50 rounded-full'><img className='w-[45px] h-[45px]' src={icon} alt="" /></div>
                    <div className='  mt-4'>
                        <div className='font-bold text-[20px] w-[]'><h3>Cash on Home Delivery</h3></div>
                        <div className=' text-center text-[14px]  pt-3'><p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p></div>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-4xl px-4 py-[25px] shadow-md  h-[286px] hover:bg-[#CAEB66] esease-in-out duration-300'>
                <div className='   mx-auto  flex flex-col items-center text-center   '>
                    <div className='shadow-2xl w-[70px] h-[70px] p-3  flex justify-center bg-amber-50 rounded-full'><img className='w-[45px] h-[45px]' src={icon} alt="" /></div>
                    <div className='  mt-4'>
                        <div className='font-bold text-[20px] w-[]'><h3>Corporate Service / Contract <br /> In Logistics</h3></div>
                        <div className=' text-center text-[14px]  pt-3'><p>Customized corporate services which includes warehouse and inventory management support.</p></div>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-4xl px-4 py-[30px] shadow-md  h-[286px] hover:bg-[#CAEB66] esease-in-out duration-300'>
                <div className='   mx-auto  flex flex-col items-center text-center   '>
                    <div className='shadow-2xl w-[70px] h-[70px] p-3  flex justify-center bg-amber-50 rounded-full'><img className='w-[45px] h-[45px]' src={icon} alt="" /></div>
                    <div className='  mt-4'>
                        <div className='font-bold text-[20px] w-[]'><h3>Parcel Return</h3></div>
                        <div className=' text-center text-[14px]  pt-3'><p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServicesCards;