import React from 'react';
import './PackageCard.css'
import { Link } from 'react-router-dom';

const PackageCard = (props) => {
    const { _id, name, location, days, offerText, country, price, img3 } = props.singlePackage;
    const url = `/package-details/${_id}`
    return (
        <div className="col">
            <div className="card h-100 card-border shadow">
                <div className="img-div">
                    <div className="ribbon">
                        <small>{offerText}</small>
                    </div>
                    <img src={img3} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <small>{location}</small>
                    <hr />
                    <p>From $ {price}</p>
                    <hr />
                    <p>{days}</p>
                    <p>{country}</p>
                    <hr />
                    <div className="text-center">
                        <Link to={url}>
                            <button className="btn shadow-none custom-btn py-2 px-3 rounded-pill">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;