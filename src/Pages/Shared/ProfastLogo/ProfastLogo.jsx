import React from 'react';
import logo from '../../../assets/logo.png';

const ProfastLogo = () => {
    return (
        <div className='flex items-end gap-2 mb-[16px]'>
            <img className='h-[48px]  border' src={logo} alt="Profast Logo" />
            <p className='font-bold text-[32px] -ml-[20px] mb-1'>Profast</p>
        </div>
    );
};

export default ProfastLogo;