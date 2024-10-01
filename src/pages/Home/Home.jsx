import React from 'react';
import Banner from './Banner';
import SauceSalad from './SauceSalad';
import FoodItem from './FoodItem';
import Carousel from './Carousel';
import Contact from './Contact';
import Offer from './Offer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodItem></FoodItem>
            <SauceSalad></SauceSalad>
            <Carousel></Carousel>
            <Offer></Offer>
            <Contact></Contact>
        </div>
    );
};

export default Home;