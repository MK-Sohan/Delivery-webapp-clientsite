import React from 'react';
import img from "../../assets/customer-top.png"
import ReviewCarousel from '../../Pages/Review/ReviewCarousel';
const ReviewPage = () => {
    return (
        <div>
            <div className='flex justify-center flex-col items-center mt-20 '><img src={img} alt="" />
                <h1 className='pt-10 text-[40px] font-bold'>What our customers are sayings</h1>
                <div className='w-[60%] text-center mt-2'>
                    <p className=''>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p></div>
            </div>
            <div>
                <ReviewCarousel></ReviewCarousel>
            </div>
        </div>
    );
};

export default ReviewPage;