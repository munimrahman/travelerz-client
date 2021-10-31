import React from 'react';
import './PackageCard.css'
import cardImg from '../../images/pcard.jpg'
import { Link } from 'react-router-dom';

const PackageCard = (props) => {
    const { _id, name, location, days, country, price } = props.singlePackage;
    const url = `/package-details/${_id}`
    return (
        <div class="col">
            <div class="card h-100 card-border shadow">
                <div class="ribbon">
                    <small>Popular</small>
                </div>
                <div className="img-div">
                    <img src={cardImg} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
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