import React from 'react';
import item1 from '../../assets/pizza6.jpg'
import item2 from '../../assets/Burger3.jpg'
import item3 from '../../assets/rice.jpg'
import item4 from '../../assets/Dessert11.jpeg'
import { Link } from 'react-router-dom';

const FoodItem = () => {
    return (
        <div className='py-20 bg-gray-50'>
            <h3 className='text-center text-3xl font-bold text-[#444]'>Tasty Delights Await</h3>
            <p className='text-gray-900 text-center max-w-3xl mx-auto mb-10 mt-5'>Savor a selection of flavorful dishes, including burgers, pizzas, sandwiches, and rice bowls, all prepared to perfection for a delicious dining experience.</p>
            <div className='grid grid-cols-4 gap-5 max-w-6xl mx-auto'>
                {/* Card- 1 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-48'
                            src={item1}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Pizza</h2>
                        <div className="card-actions justify-center">
                            <Link to="/pizza">
                                <button className="btn text-white border-none bg-[#C7253E] hover:bg-[#A02334]">See More Items</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Card- 2 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-48'
                            src={item2}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Burger</h2>
                        <div className="card-actions justify-center">
                            <button className="btn text-white border-none bg-[#C7253E] hover:bg-[#A02334]">See More Items</button>
                        </div>
                    </div>
                </div>
                {/* Card- 3 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-48'
                            src={item3}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Rice</h2>
                        <div className="card-actions justify-center">
                            <button className="btn text-white border-none bg-[#C7253E] hover:bg-[#A02334]">See More Items</button>
                        </div>
                    </div>
                </div>
                {/* Card- 4 */}
                <div className="card bg-white shadow-xl">
                    <figure>
                        <img className='h-48'
                            src={item4}
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className=" text-center text-xl font-bold text-[#444] mb-5">Desserts</h2>
                        <div className="card-actions justify-center">
                            <button className="btn text-white border-none bg-[#C7253E] hover:bg-[#A02334]">See More Items</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;