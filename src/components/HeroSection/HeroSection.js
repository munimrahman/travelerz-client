import React from 'react';
import './HeroSection.css'
import img1 from "../../images/slider/slider1.jpg";
import img2 from "../../images/slider/slider2.jpg";
import img3 from "../../images/slider/slider3.jpg";
import liens from "../../images/slider/lines.png";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex container mx-auto align-items-center">
                            <div className="col-md-6">
                                <h1 className="py-3 lh-base">4 Days Tunisia & <br /><span className="font-nunito fw-bold secondary-text">Sahara discovery</span></h1>
                                <p>Courage of our questions star stuff harvesting star light shores of the cosmic ocean extraordinary claims require extraordinary evidence white dwarf vastness is bearable only through love.</p>
                                <button className="btn shadow-none btn-info rounded-pill fw-bold text-white py-2 px-3">More About Us</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img1} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex container mx-auto align-items-center">
                            <div className="col-md-6">
                                <small className="secondary-text fw-bold">SUPERIOR EXPERTISE</small>
                                <h1 className="py-3 lh-base">We’ve Been In Business <br /><span className="font-nunito fw-bold secondary-text">Since 1996</span></h1>
                                <button className="btn shadow-none btn-info rounded-pill fw-bold text-white">Book Appointment</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img2} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex container mx-auto align-items-center">
                            <div className="col-md-6">
                                <small className="secondary-text fw-bold">GOAL-ORIENTED APPROACH</small>
                                <h1 className="py-3 lh-base">A Practice Built On <br /><span className="font-nunito fw-bold secondary-text">Honesty & Integrity</span></h1>
                                <button className="btn shadow-none btn-info rounded-pill fw-bold text-white">Get in Touch</button>
                            </div>
                            <div className="col-md-6">
                                <img src={img3} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;