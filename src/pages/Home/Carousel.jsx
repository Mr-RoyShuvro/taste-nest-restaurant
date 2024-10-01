import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

import banner from '../../assets/banner1.jpg'
import banner2 from '../../assets/2.jpg'
import banner3 from '../../assets/banner2.jpg'

const Carousel = () => {
    return (
        <>
            <div className='relative'>

                <div className='relative'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                                <div className="text-neutral-content glass p-10">
                                    <div className="px-2 ">
                                        <h1 className="mb-5 text-4xl font-bold text-white text-center">WEEKDAY LUNCH DELIGHT</h1>
                                        <p className="mb-5 text-white max-w-3xl mx-auto text-center">Take a break with our Weekday Lunch Delight! Enjoy a two-course meal at a special price, Monday to Friday, 11 AM to 3 PM. Treat yourself to a delightful lunch today!</p>
                                        <Link className='flex justify-center items-center' to="/contact">
                                            <button className="btn text-white border-none bg-[#C7253E] hover:bg-[#A02334]">BOOK A TABLE</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner2})` }}>
                                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                                <div className=" text-neutral-content glass p-10">
                                    <div className="px-2">
                                        <h1 className="mb-5 text-4xl font-bold text-white text-center">FAMILY FEAST SPECIAL</h1>
                                        <p className="mb-5 text-white max-w-3xl mx-auto text-center">Bring your loved ones for our Family Feast Special! Enjoy a complimentary dessert for tables of four or more. Book now and make memories over a delicious meal!</p>
                                        <Link className='flex justify-center items-center' to="/contact">
                                            <button className="btn text-white border-none bg-[#C7253E] hover:bg-[#A02334]">BOOK A TABLE</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Carousel;