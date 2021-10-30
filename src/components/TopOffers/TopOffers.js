import React from 'react';
import topOffers from "../../images/top-offers.jpg";

const TopOffers = () => {
    return (
        <div className="container mx-auto">
            <h1>Explore our top offers</h1>
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="border row my-2">
                        <div className="col-12 col-md-3">
                            <img src={topOffers} className="img-fluid" alt="" />
                        </div>
                        <div className="row col-12 col-md-9">
                            <div className="col-12 col-md-9">
                                <p>Acacia Marina</p>
                            </div>
                            <div className="col-12 col-md-3 border-start">
                                <p> price</p>
                            </div>
                        </div>
                    </div>
                    <div className="border row my-2">
                        <div className="col-12 col-md-3">
                            <img src={topOffers} className="img-fluid" alt="" />
                        </div>
                        <div className="row col-12 col-md-9">
                            <div className="col-12 col-md-9">
                                <p>Acacia Marina</p>
                            </div>
                            <div className="col-12 col-md-3 border-start">
                                <p> price</p>
                            </div>
                        </div>
                    </div>
                    <div className="border row my-2">
                        <div className="col-12 col-md-3">
                            <img src={topOffers} className="img-fluid" alt="" />
                        </div>
                        <div className="row col-12 col-md-9">
                            <div className="col-12 col-md-9">
                                <p>Acacia Marina</p>
                            </div>
                            <div className="col-12 col-md-3 border-start">
                                <p> price</p>
                            </div>
                        </div>
                    </div>
                    <div className="border row my-2">
                        <div className="col-12 col-md-3">
                            <img src={topOffers} className="img-fluid" alt="" />
                        </div>
                        <div className="row col-12 col-md-9">
                            <div className="col-12 col-md-9">
                                <p>Acacia Marina</p>
                            </div>
                            <div className="col-12 col-md-3 border-start">
                                <p> price</p>
                            </div>
                        </div>
                    </div>
                    <div className="border row my-2">
                        <div className="col-12 col-md-3">
                            <img src={topOffers} className="img-fluid" alt="" />
                        </div>
                        <div className="row col-12 col-md-9">
                            <div className="col-12 col-md-9">
                                <p>Acacia Marina</p>
                            </div>
                            <div className="col-12 col-md-3 border-start">
                                <p> price</p>
                            </div>
                        </div>
                    </div>
                    <div className="border row my-2">
                        <div className="col-12 col-md-3">
                            <img src={topOffers} className="img-fluid" alt="" />
                        </div>
                        <div className="row col-12 col-md-9">
                            <div className="col-12 col-md-9">
                                <p>Acacia Marina</p>
                            </div>
                            <div className="col-12 col-md-3 border-start">
                                <p> price</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 border">
                    <img src={topOffers} className="img-fluid" alt="" />
                    <img src={topOffers} className="img-fluid" alt="" />
                    <img src={topOffers} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopOffers;