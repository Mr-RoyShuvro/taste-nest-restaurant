import React from 'react';
import Burger1 from '../../assets/Burger1.jpg'
import Burger2 from '../../assets/Burger2.jpg'
import Burger3 from '../../assets/Burger3.jpg'
import Burger4 from '../../assets/Burger4.jpg'
import Burger5 from '../../assets/Burger5.jpg'
import Burger6 from '../../assets/Burger6.jpg'

const Burger = () => {
    return (
        <div className='pb-20 bg-gray-300'>
            <div className='pt-[70px] bg-red-900'>
            </div>
            <h3 className='text-center text-3xl font-bold pt-20 pb-10 text-red-900'>Burger</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto'>
                {/* Card- 1 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={Burger1}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Turkey Burgers</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 2 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={Burger2}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Hamburg Steak</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 3 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={Burger3}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Elk Burgers</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 4 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={Burger4}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Black Bean</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 5 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={Burger5}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Wild Salmon</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 6 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={Burger6}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Butter Chicken</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Burger;