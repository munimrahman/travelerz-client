import React from 'react';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className="container my-5">
            <h1 className="fredoka-font text-center">Why Choose Us</h1>
            <div className="row mt-4 pb-5 text-center">
                <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="bg-info icn d-flex align-items-center justify-content-center mb-3">
                        <i className="far fa-heart text-white fs-3"></i>
                    </div>
                    <p className="fredoka-font">Passionate Service</p>
                    <p>Picking where to go out of 150 countries worldwide</p>
                </div>
                <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="bg-info icn d-flex align-items-center justify-content-center mb-3">
                        <i className="fas fa-dollar-sign text-white fs-3"></i>
                    </div>
                    <p className="fredoka-font">Best Price Guarantee</p>
                    <p>Your Trip Host has designed every trip to be packed.</p>
                </div>
                <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="bg-info icn d-flex align-items-center justify-content-center mb-3">
                        <i className="fas fa-plane-departure text-white fs-3"></i>
                    </div>
                    <p className="fredoka-font">Handpicked Deals</p>
                    <p>Booking is easy with complete flexibility, & confidence.</p>
                </div>
                <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
                    <div className="bg-info icn d-flex align-items-center justify-content-center mb-3">
                        <i className="far fa-calendar-alt text-white fs-3"></i>
                    </div>
                    <p className="fredoka-font">Secure Booking</p>
                    <p>Everything has been sorted for you & cool, convenient.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;