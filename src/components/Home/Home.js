import React from 'react';
import FromBlogs from '../FromBlogs/FromBlogs';
import HeroSection from '../HeroSection/HeroSection';
import TopOffers from '../TopOffers/TopOffers';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TopOffers></TopOffers>
            <FromBlogs></FromBlogs>
        </div>
    );
};

export default Home;