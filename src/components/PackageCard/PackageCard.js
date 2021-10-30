import React from 'react';
import './PackageCard.css'
import cardImg from '../../images/pcard.jpg'
import { Link } from 'react-router-dom';

const PackageCard = () => {
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
                    <h5 class="card-title">Cala Vinas</h5>
                    <small>Cala Vinas, Mallorca, Spain</small>
                    <hr />
                    <p>From $ 630</p>
                    <hr />
                    <p>8 days/7 nights, All Inclusive</p>
                    <p>London Gatwick</p>
                    <hr />
                    <div className="text-center">
                        <Link to="/package-details">
                            <button className="btn shadow-none custom-btn py-2 px-3 rounded-pill">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;