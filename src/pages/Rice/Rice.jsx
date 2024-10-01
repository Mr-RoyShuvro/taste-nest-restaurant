import React from 'react';
import Rice1 from '../../assets/Rice1.png'
import Rice2 from '../../assets/Rice2.png'
import Rice3 from '../../assets/Rice3.png'
import Rice4 from '../../assets/Rice4.png'
import Rice5 from '../../assets/Rice5.png'
import Rice6 from '../../assets/Rice6.png'

const Rice = () => {
    return (
        <div className='pb-20 bg-gray-300'>
            <div className='pt-[70px] bg-red-900'>
            </div>
            <h3 className='text-center text-3xl font-bold pt-20 pb-10 text-red-900'>Rice</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto'>
                {/* Card- 1 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 py-8'
                            src={Rice1}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Sriracha Teriyaki Meatball Bowls</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 2 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={Rice2}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Sizzling Steak Burrito Bowls</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 3 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={Rice3}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Vegetarian Mixed Rice Bowls</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 4 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 py-8'
                            src={Rice4}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Teriyaki Chicken Rice Bowls</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 5 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 '
                            src={Rice5}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Black Rice Salad Bowls</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>
                {/* Card- 6 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-80 py-8'
                            src={Rice6}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Peanut Butter Tofu Rice Bow</h2>
                        <div className="card-actions justify-center">
                            <h4 className='text-gray-900'>Price: $15</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Rice;