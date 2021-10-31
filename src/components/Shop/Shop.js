import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    console.log(cart);
    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd._id === product._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== product._id);
            // exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            // product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
    }
    return (
        <div className="bg-eee">
            <div className="container mx-auto pt-4">
                <h1 className="py-3">Shop</h1>
                <div className="container d-flex justify-content-between mb-3">
                    <div className="mx-5">
                        <p className="fs-6"><i className="fas fa-th text-secondary me-2"></i> Showing 1 - 6 of 6 Products</p>
                    </div>
                    <div className="mx-5 d-flex">
                        <div className="mx-2">
                            <select className="form-select form-select-sm shadow-none" aria-label=".form-select-sm example" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT">Select Category</option>
                                <option value="1">Camping</option>
                                <option value="2">Vintage</option>
                                <option value="4">Summer</option>
                                <option value="5">Accessories</option>
                            </select>
                        </div>
                        <div className="mx-2">
                            <select className="form-select form-select-sm shadow-none" aria-label=".form-select-sm example" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT">Sort By</option>
                                <option value="1">Name</option>
                                <option value="2">Price Low to High</option>
                                <option value="2">Price High to Low</option>
                                <option value="3">Reviews</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products?.map(product => <ProductCard
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></ProductCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;