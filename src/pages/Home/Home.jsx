import React from 'react';
import Navbar from '../SharedPage/Navbar';
import Banner from './Banner';
import SauceSalad from './SauceSalad';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <SauceSalad></SauceSalad>
        </div>
    );
};

export default Home;