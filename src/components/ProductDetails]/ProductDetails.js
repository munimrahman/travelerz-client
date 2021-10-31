import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { productID } = useParams();
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productID}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    const { name, price, img, des } = product || {};
    return (
        <div className="bg-eee">
            <div className="py-5">
                <div className="container row mx-auto">
                    <div className="col-12 col-md-6 pb-3">
                        <img src={img} className="img-fluid rounded" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1 className="fw-bold text-light-dark">{name}</h1>
                        <div className="my-2">
                            <i className="fas fa-star primary-text"></i>
                            <i className="fas fa-star primary-text"></i>
                            <i className="fas fa-star primary-text"></i>
                            <i className="fas fa-star primary-text"></i>
                            <i className="far fa-star primary-text"></i>
                            <span className="ps-2 text-color-gray">(4 customer reviews)</span>
                        </div>
                        <p className="fw-bold fs-3 primary-text">Price: ${price}.00</p>
                        <p className="service-font-size py-4">{des}</p>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 pb-2">
                                <input className="form-control me-2 text-center shadow-none" type="number" defaultValue="1" aria-label="Search" />
                            </div>
                            <div className="col-12 col-md-6">
                                <button className="btn custom-btn text-white fw-bold py-2 w-100 rounded-pill shadow-none" type="submit">Add To Cart</button>
                            </div>
                        </div>
                        <p className="py-3 text-secondary service-font-size">Categories: <span className="primary-text">Accessories</span>, <span className="primary-text">Camping</span>, <span className="primary-text">Summer</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;