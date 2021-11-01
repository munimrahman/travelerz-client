import React from 'react';
import FromBlogs from '../FromBlogs/FromBlogs';
import HeroSection from '../HeroSection/HeroSection';
import ReviewSection from '../ReviewSection/ReviewSection';
import TopOffers from '../TopOffers/TopOffers';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TopOffers></TopOffers>
            <WhyUs></WhyUs>
            <ReviewSection></ReviewSection>
            <FromBlogs></FromBlogs>
        </div>
    );
};

export default Home;