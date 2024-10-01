import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LuDownload, LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";
import cover from '../../assets/2.jpg'

const Contact = () => {
    return (
        <div className="hero min-h-screen" style={{
            backgroundImage: `url(${cover})`,
        }}>
            <div className="hero-overlay bg-opacity-80 bg-black"></div>
            <div className='flex items-center gap-0 md:gap-36 flex-col md:flex-row max-w-6xl mx-auto' >
                <div className="md:w-1/2 ">
                    <div className="px-0 md:px-20 pt-20">
                        <h3 className="text-2xl md:text-4xl font-bold pb-3 text-white">Get in Touch</h3>
                    </div>
                    <div className="hero h-[600px]">
                        <div className="hero-content text-neutral-content text-center">
                            <div className="shrink-0 ">
                                <form className="card-body gap-10">
                                    <div className="form-control">
                                        <input type="text" name="name" placeholder='Name' className="input bg-transparent text-white font-semibold text-lg" required />
                                        <hr />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" name="email" placeholder="Email" className="input bg-transparent text-white font-semibold text-lg" required />
                                        <hr />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name="subject" placeholder="Subject" className="input bg-transparent text-white font-semibold text-lg" required />
                                        <hr />
                                    </div>
                                    <div className="form-control">
                                        <textarea type="text" name="message" placeholder="Message" className="input h-24 bg-transparent text-white font-semibold text-lg" required></textarea>
                                        {/* <input   /> */}
                                        <hr />
                                    </div>
                                    <div className="form-control mt-6">
                                    <button className="btn text-white border-none bg-[#C7253E] hover:bg-[#A02334]">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 px-0 md:px-20 py-20 space-y-14 ">
                    
                    <div className="flex gap-5 items-center">
                        <figure className="bg-[#C7253E] rounded-full p-4 flex justify-center items-center">
                            <LuPhone className="w-8 h-8 text-white"></LuPhone>
                        </figure>
                        <div>
                            <h2 className="text-white text-xl font-semibold">Phone</h2>
                            <p className="text-gray-200 pt-3">+8801785765702</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <figure className="bg-[#C7253E] rounded-full p-4 flex justify-center items-center">
                            <HiOutlineMail className="w-8 h-8 text-white" />
                        </figure>
                        <div>
                            <h2 className="text-white text-xl font-semibold">Email</h2>
                            <p className="text-gray-200 pt-3">shuvroroyshuvo@gmail.com</p>
                        </div>

                    </div>
                    <div className="flex gap-5 items-center pb-9">
                        <figure className="bg-[#C7253E] rounded-full p-4 flex justify-center items-center">
                            <GrLocation className="w-8 h-8 text-white "></GrLocation>
                        </figure>
                        <div>
                            <h2 className="text-white text-xl font-semibold">Location</h2>
                            <p className="text-gray-200 pt-3">27/3 jalalabad, Amberkhana, Sylhet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;