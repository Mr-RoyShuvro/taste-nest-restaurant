import React from 'react';
import Banner from './Banner';
import SauceSalad from './SauceSalad';
import FoodItem from './FoodItem';
import Carousel from './Carousel';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodItem></FoodItem>
            <SauceSalad></SauceSalad>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;