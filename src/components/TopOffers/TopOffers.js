import React from 'react';
import usePackages from '../../hooks/usePackages';
import TopOfferCard from '../TopOfferCard/TopOfferCard';
import TopOfferSideBar from '../TopOfferSideBar/TopOfferSideBar';
import './TopOffer.css'

const TopOffers = () => {
    const [packages, isLoading] = usePackages();
    const topOffers = packages?.slice(0, 6)
    const toOffersSide = packages?.slice(5, 9)
    return (
        <div className="bg-eee">
            <div className="container mx-auto">
                <h1 className="text-center py-5 fredoka-font">Explore Our Top Offers</h1>
                {isLoading === true ? <div className="text-center py-5">
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div> :
                    <div className="row">
                        <div className="col-12 col-md-8">
                            {
                                topOffers?.map(singleOffer => <TopOfferCard
                                    key={singleOffer?._id}
                                    singleOffer={singleOffer}
                                ></TopOfferCard>)
                            }
                        </div>
                        <div className="col-12 col-md-4 py-4">
                            {
                                toOffersSide?.map(topOfferSide => <TopOfferSideBar
                                    key={topOfferSide._id}
                                    topOfferSide={topOfferSide}
                                ></TopOfferSideBar>)
                            }
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default TopOffers;