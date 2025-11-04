import React from 'react';
import icon from '../../assets/bookingIcon.png'

const HowWorkssingleCard = ({ card }) => {
    const { title, description } = card
    console.log(card)
    return (
        <div className='bg-white rounded-4xl px-4 py-[10px] shadow-md h-[256px]  hover:transition delay-150 duration-300 ease-in-out hover:scale-105 '>
            <div className='animate-bounce pt-3'><img src={icon} alt="" /></div>
            <div className='flex justify-center flex-col text-start   mt-4'>
                <div className='font-bold text-[18px]'><h3>{title}</h3></div>
                <div className='w-auto  pt-3'><p>{description}</p></div>
            </div>
        </div>
    );
};

export default HowWorkssingleCard;