import React from 'react';
import img from '../../images/product1.jpg'

const ProductDetails = () => {
    return (
        <div className="bg-eee">
            <div className="py-5">
                <div className="container row mx-auto">
                    <div className="col-12 col-md-6 mb-3">
                        <img src={img} className="img-fluid rounded" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h1 className="fw-bold text-light-dark">Product Name</h1>
                        <div className="my-2">
                            <i className="fas fa-star text-info"></i>
                            <i className="fas fa-star text-info"></i>
                            <i className="fas fa-star text-info"></i>
                            <i className="fas fa-star text-info"></i>
                            <i className="far fa-star text-info"></i>
                            <span className="ps-2 text-color-gray">(4 customer reviews)</span>
                        </div>
                        <p className="fw-bold fs-3 text-info">Price: $120.00</p>
                        <p className="service-font-size py-4">Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.</p>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 mb-2">
                                <input className="form-control me-2 text-center shadow-none" type="number" defaultValue="1" aria-label="Search" />
                            </div>
                            <div className="col-12 col-md-6">
                                <button className="btn btn-info text-white fw-bold py-2 w-100 rounded-pill shadow-none" type="submit">Add To Cart</button>
                            </div>
                        </div>
                        <p className="py-3 text-secondary service-font-size">Categories: <span className="text-info">Body</span>, <span className="text-info">Exercise</span>, <span className="text-info">Physiotherapy</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;