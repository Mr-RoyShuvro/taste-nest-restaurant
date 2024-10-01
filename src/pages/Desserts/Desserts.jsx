import React from 'react';
import Dessert1 from '../../assets/Dessert11.jpeg'
import Dessert2 from '../../assets/Dessert22.jpeg'
import Dessert3 from '../../assets/Dessert333.png'
import Dessert4 from '../../assets/Dessert4.jpg'
import Dessert5 from '../../assets/Dessert5.jpeg'
import Dessert6 from '../../assets/Dessert6.jpeg'

const Desserts = () => {
    return (
        <div className='pb-20 bg-gray-300'>
        <div className='pt-[70px] bg-red-900'>
        </div>
        <h3 className='text-center text-3xl font-bold pt-20 pb-10 text-red-900'>Desserts</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto'>
            {/* Card- 1 */}
            <div className="card bg-white shadow-xl">
                <figure>
                    <img className='h-80 '
                        src={Dessert1}
                        alt="Food" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Pastry</h2>
                    <div className="card-actions justify-center">
                        <h4 className='text-gray-900'>Price: $15</h4>
                    </div>
                </div>
            </div>
            {/* Card- 2 */}
            <div className="card bg-white shadow-xl">
                <figure>
                    <img className='h-80 '
                        src={Dessert2}
                        alt="Food" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Icecream</h2>
                    <div className="card-actions justify-center">
                        <h4 className='text-gray-900'>Price: $15</h4>
                    </div>
                </div>
            </div>
            {/* Card- 3 */}
            <div className="card bg-white shadow-xl">
                <figure>
                    <img className='h-80 '
                        src={Dessert3}
                        alt="Food" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Caramal custerd</h2>
                    <div className="card-actions justify-center">
                        <h4 className='text-gray-900'>Price: $15</h4>
                    </div>
                </div>
            </div>
            {/* Card- 4 */}
            <div className="card bg-white shadow-xl">
                <figure>
                    <img className='h-80 '
                        src={Dessert4}
                        alt="Food" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Doughnuts</h2>
                    <div className="card-actions justify-center">
                        <h4 className='text-gray-900'>Price: $15</h4>
                    </div>
                </div>
            </div>
            {/* Card- 5 */}
            <div className="card bg-white shadow-xl">
                <figure>
                    <img className='h-80 '
                        src={Dessert5}
                        alt="Food" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Stacked brownies</h2>
                    <div className="card-actions justify-center">
                        <h4 className='text-gray-900'>Price: $15</h4>
                    </div>
                </div>
            </div>
            {/* Card- 6 */}
            <div className="card bg-white shadow-xl">
                <figure>
                    <img className='h-80 '
                        src={Dessert6}
                        alt="Food" />
                </figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Apple pie</h2>
                    <div className="card-actions justify-center">
                        <h4 className='text-gray-900'>Price: $15</h4>
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default Desserts;