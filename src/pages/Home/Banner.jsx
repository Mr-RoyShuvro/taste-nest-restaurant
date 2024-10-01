import React from 'react';
import banner from '../../assets/banner4.png'

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${banner})`,
            }}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl md:text-7xl font-bold pb-80 text-[#FFF4EA]">TASTE THE <br />
                        DIFFERENCE</h1>
                    <p className="mb-5 absolute right-5 bottom-5 text-left text-white">
                        <span className='text-xl font-bold'>The Hamburger</span> <br />
                        Smoked brisket, tender ribs, smoked sausage, bacon & <br />cheddar with lettuce, tomato, house BBQ & ranch
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;