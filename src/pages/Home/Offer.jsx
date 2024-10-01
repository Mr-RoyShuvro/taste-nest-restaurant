import React from 'react';
import ice from '../../assets/ice.jpg'

const Offer = () => {
    return (
        <div>
            <div className='py-8 bg-red-900'>
                <marquee className='text-3xl font-bold text-white' behavior="" direction="">25% Discount for ordering 3 items. Choose your items first to get the offer.
                </marquee>
            </div>
            <img className='w-full' src={ice} alt="" />
        </div>
    );
};

export default Offer;