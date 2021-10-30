import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { _id, name, price, img } = props.product;
    const url = `/product-details/${_id}`
    return (
        <div className="col product mb-3">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold mb-0 text-hover">{name}</h5>
                    <div className="my-2">
                        <i className="fas fa-star primary-text"></i>
                        <i className="fas fa-star primary-text"></i>
                        <i className="fas fa-star primary-text"></i>
                        <i className="fas fa-star primary-text"></i>
                        <i className="far fa-star primary-text"></i>
                    </div>
                    <p className="card-text fw-bold text-secondary">Price: ${price}</p>
                    <div className="text-center">
                        <Link to={url}>
                            <button className="btn shadow-none custom-btn py-2 px-3 rounded-pill text-white fw-bold shadow-none">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;