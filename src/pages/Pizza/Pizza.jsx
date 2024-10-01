import React from 'react';
import pizza1 from '../../assets/pizza1.jpg'
import pizza2 from '../../assets/pizza2.jpg'
import pizza3 from '../../assets/pizza3.jpg'
import pizza4 from '../../assets/pizza4.jpg'
import pizza5 from '../../assets/pizza5.jpg'
import pizza6 from '../../assets/pizza6.jpg'

const Pizza = () => {
    return (
        <div className='pb-20 bg-gray-300'>
            <div className='pt-[70px] bg-red-900'>
            </div>
            <h3 className='text-center text-3xl font-bold pt-20 pb-10 text-red-900'>Pizza</h3>
            <div className='grid grid-cols-3 gap-5 max-w-6xl mx-auto'>
                {/* Card- 1 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={pizza1}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Neapolitan Pizza</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 2 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={pizza2}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Mozzarella Pizza</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 3 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={pizza3}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Hawaiian Pizza</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 4 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={pizza4}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Meat Lovers Pizza</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 5 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={pizza5}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Pepperoni Pizza</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 6 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={pizza6}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Chessy-Pizza</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pizza;