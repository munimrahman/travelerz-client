import React from 'react';
import { Link } from 'react-router-dom';

const TopOfferCard = (props) => {
    // console.log(props.singleOffer);
    const { _id, name, price, days, location, country, img3 } = props.singleOffer || {};
    return (
        // /package-details/61803e76be2ef01c6225eea4
        <div className="row my-4 bg-white py-2 rounded offer-card shadow align-items-center">
            <div className="col-12 col-md-3">
                <img src={img3} className="img-fluid rounded" alt="" />
            </div>
            <div className="row col-12 col-md-9">
                <div className="col-12 col-md-9 py-2">
                    <Link to={`/package-details/${_id}`} className="text-decoration-none text-dark">
                        <h6 className="fredoka-font top-title-font mb-0">{name}</h6>
                    </Link>
                    <span className="location-font icon-color">{location}</span>
                    <div className="mt-2">
                        <p className="my-1"><i className="far fa-calendar-alt icon-color icon-font me-1"></i>{days}</p>
                        <p className="my-0"><i className="fas fa-plane-departure icon-color me-1"></i>{country}</p>
                    </div>
                </div>
                <div className="col-12 col-md-3 border-start text-center">
                    <div className="my-2">
                        <p className="my-0 ">From</p>
                        <p className="my-0 fredoka-font fs-5">$ {price}</p>
                    </div>
                    <div>
                        <Link to={`/package-details/${_id}`} >
                            <button className="btn custom-btn rounded-pill shadow-none location-font fw-bold py-2">BOOK NOW</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TopOfferCard;