import React from 'react';
import { Link } from 'react-router-dom';
import aquila from "../../images/aquila.jpg";

const TopOfferSideBar = (props) => {
    const { name, price, days, country, offerText, img1 } = props.topOfferSide;
    return (
        <div>
            <Link to="">
                <div className="mb-3 card-container">
                    <div className="ribbon">
                        <small>{offerText}</small>
                    </div>
                    <img src={img1} className="img-fluid rounded" alt="" />
                    <div className="text-block">
                        <div className="pb-3">
                            <div className="d-flex">
                                <h6 className="fredoka-font top-title-font">{name}</h6>
                                <div className="ms-2 text-warning">
                                    <i className="fas fa-star start-font"></i>
                                    <i className="fas fa-star start-font"></i>
                                    <i className="fas fa-star start-font"></i>
                                    <i className="fas fa-star start-font"></i>
                                </div>
                            </div>
                            <p>From <span className="fredoka-font">$ {price}</span></p>
                            <div className="mt-2">
                                <p className="my-1"><i className="far fa-calendar-alt icon-font me-1"></i>{days}</p>
                                <p className="my-0"><i className="fas fa-plane-departure me-1"></i>{country}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TopOfferSideBar;