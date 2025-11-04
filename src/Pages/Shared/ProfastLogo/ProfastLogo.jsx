import React from 'react';
import logo from '../../../assets/logo.png';

const ProfastLogo = () => {
    return (
        <div className='flex items-end gap-2 '>
            <img className='  relative ' src={logo} alt="Profast Logo" />
            <div className=' absolute '><p className='font-bold text-[32px] ml-[20px] '>Profast</p></div>
        </div>
    );
};

export default ProfastLogo;