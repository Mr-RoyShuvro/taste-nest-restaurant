import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navLinks = <>
        <li><Link to="/" className='text-base font-semibold text-[#FFEEAD]'>Home</Link></li>
        <li><Link to="/" className='text-base font-semibold text-[#FFEEAD]'>About</Link></li>
        <li><Link to="/" className='text-base font-semibold text-[#FFEEAD]'>Services</Link></li>
    </>

    return (
        <div className="navbar absolute px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-white">TasteNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#F3AA60] text-white border-none font-semibold text-base hover:bg-[#FFB84C]">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;