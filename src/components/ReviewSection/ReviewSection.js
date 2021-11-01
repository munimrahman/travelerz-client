import React from 'react';
import './ReviewSection.css'
import img from '../../images/packageImg5.jpg'
import personOne from '../../images/person-1.png'
import personTwo from '../../images/person-2.png'
import personThree from '../../images/person-3.png'
import { Link } from 'react-router-dom';

const ReviewSection = () => {
    return (
        <div className="review-section my-5">
            <div className="container row mx-auto">
                <div className="col-12 col-md-6">
                    <div className="card-container">
                        <img src={img} className="img-fluid top-m rounded" alt="" />
                        <Link to="/package-details/61803e34be2ef01c6225eea3">
                            <div className="text-block-review-section">
                                <div className="pb-3">
                                    <div className="d-flex">
                                        <h6 className="fredoka-font top-title-font primary-text">Acacia Marina</h6>
                                        <div className="ms-2 text-warning">
                                            <i className="fas fa-star start-font"></i>
                                            <i className="fas fa-star start-font"></i>
                                            <i className="fas fa-star start-font"></i>
                                            <i className="fas fa-star start-font"></i>
                                        </div>
                                    </div>
                                    <p>From <span className="fredoka-font">$ 800</span></p>
                                    <div className="mt-2">
                                        <p className="my-1"><i className="far fa-calendar-alt icon-font me-1"></i>8 days/7 nights, All Inclusive</p>
                                        <p className="my-0"><i className="fas fa-plane-departure me-1"></i>London Luton</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="">
                        <div className="bottom-m">
                            <div id="carouselExampleInterval" className="carousel slide mx-auto shadow rounded bg-white bottom-p" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="2000">
                                        <h4 className="fredoka-font text-center">TOP REVIEWS</h4>
                                        <p className="text-center lh-lg mx-auto">I cannot speak highly enough about our 3 week trip to this place and the services provided by this travel company.</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="hr-line border border-info w-25"></div>
                                            <img src={personOne} className="d-block border border-3 border-info carousel-img mx-3" alt="..." />
                                            <div className="hr-line border border-info w-25"></div>
                                        </div>
                                        <p className="text-center mt-3"><span className="fw-bold">Jennifer Ebron</span> -<small> Neck Pain Treatment</small></p>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <h4 className="fredoka-font text-center">TOP REVIEWS</h4>
                                        <p className="text-center lh-lg mx-auto">I cannot speak highly enough about our 3 week trip to this place and the services provided by this travel company.</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="hr-line border border-info w-25"></div>
                                            <img src={personTwo} className="d-block border border-3 border-info carousel-img mx-3" alt="..." />
                                            <div className="hr-line border border-info w-25"></div>
                                        </div>
                                        <p className="text-center mt-3"><span className="fw-bold">Christopher Strock</span> -<small> Back Pain Treatment</small></p>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <h4 className="fredoka-font text-center">TOP REVIEWS</h4>
                                        <p className="text-center lh-lg mx-auto">I cannot speak highly enough about our 3 week trip to this place and the services provided by this travel company.</p>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="hr-line border border-info w-25"></div>
                                            <img src={personThree} className="d-block border border-3 border-info carousel-img mx-3" alt="..." />
                                            <div className="hr-line border border-info w-25"></div>
                                        </div>
                                        <p className="text-center mt-3"><span className="fw-bold">John White</span> -<small> Work Injury Treatment</small></p>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;

{/* <img src={img} className="img-fluid bottom-m" alt="" /> */ }