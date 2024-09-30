import React from 'react';
import sauce from '../../assets/sause.jpg'
import salad from '../../assets/salad.jpg'

const SauceSalad = () => {
    return (
        <div>
            <div className='flex bg-white'>
                <div className='w-1/2'>
                    <img className='w-full' src={sauce} alt="" />
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                    <h4 className='text-center text-[#444] text-xl font-extrabold'>PRESENT</h4>
                    <div className='border-t-2 border-[#444] w-full mt-5'>
                    </div>
                    <hr />
                    <h1 className='text-[#444] text-7xl font-bold text-center pt-14'>TOMATO <br />
                        ORIGINAL</h1>
                    <h2 className='text-[#F31559] text-7xl font-bold'>Sauce</h2>
                    <h4 className='text-[#444] text-xl font-bold pt-20'>OUR SIGNATURE HANDMADE BEEF PATTY</h4>
                    <p className='text-[#444] w-5/6 text-center pt-10'>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                </div>
            </div>
            {/* salad */}
            <div className='flex bg-[#28282B]'>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                    <h4 className='text-center text-white text-xl font-extrabold'>ALWAYS</h4>
                    <div className='border-t-2 border-white w-full mt-5'>
                    </div>
                    <h2 className='text-[#59b85e] text-7xl font-bold pt-14'>FRESH</h2>
                    <h1 className='text-white text-7xl font-bold text-center'>SALAD</h1>
                    <h4 className='text-white text-xl font-bold pt-20'>Life is like a burger the more you add to it, the
                        better it becomes.</h4>
                    <p className='text-white w-5/6 text-center pt-10'>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                </div>
                <div className='w-1/2'>
                    <img className='w-full' src={salad} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SauceSalad;