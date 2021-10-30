import React from 'react';
import './Cart.css'
import img from '../../images/pcard.jpg'
import paypal from '../../images/paypal.png'
import venmo from '../../images/venmo.png'
import pay from '../../images/pay.png'
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="bg-eee py-4">
            <div className="container rounded bg-white shadow py-4 px-4">
                <h1 className="py-2">Cart</h1>
                <table class="table">
                    <thead>
                        <tr className="text-center">
                            <th className="col-6">Products</th>
                            <th className="col-2">Price</th>
                            <th className="col-2">Quantity</th>
                            <th className="col-2">Subtotal</th>
                            <th className="col-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-7">
                                <div className="row align-items-center">
                                    <div className="col-4 py-0 px-1">
                                        <img src={img} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-8">
                                        <p className="m-0">Acacia Marina</p>
                                        <p className="m-0">All Inclusive Twin Room</p>
                                        <p className="m-0">Dates: November 6, 2021 to November 13, 2021</p>
                                        <p className="m-0">People: 1 adults, 0 children</p>
                                        <p className="m-0">Rooms: 1</p>
                                    </div>
                                </div>
                            </td>
                            <td className="col-2 text-center v-align">$120</td>
                            <td className="col-2 text-center v-align">2</td>
                            <td className="col-2 text-center v-align">$240</td>
                            <td className="col-2 text-center v-align">
                                <button className="btn btn-outline-danger shadow-none fw-bold px-2 py-0">X</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot className="text-center">
                        <tr>
                            <td colspan="2">
                                <div className="d-flex">
                                    <input type="text" name="" id="" className="form-control w-25 me-2 shadow-none" />
                                    <button className="btn shadow-none custom-btn px-3 py-2 rounded-pill">Apply Coupon</button>
                                </div>
                            </td>
                            <td className="fw-bold">Subtotals:</td>
                            <td className="fw-bold">$240</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <div className="row align-items-center">
                    <div className="col-12 col-md-5">
                        <div className="col-12 mx-2 bg-paypal text-center my-2 py-3 rounded">
                            <img src={paypal} alt="" />
                        </div>
                        <div className="col-12 mx-2 bg-primary text-center my-2 py-3 rounded">
                            <img src={venmo} alt="" />
                        </div>
                        <div className="col-12 mx-2 bg-light border text-center my-2 fs-4 py-3 rounded">
                            <img src={pay} alt="" /> Pay Later
                        </div>
                    </div>
                    <div className="col-12 col-md-2 fw-bold fs-4 text-center">
                        - OR -
                    </div>
                    <div className="col-12 col-md-5">
                        <h3 className="my-3">Cart Total</h3>
                        <table class="table border rounded">
                            <tbody>
                                <tr>
                                    <th className="bg-secondary text-white">Subtotals</th>
                                    <td className="text-center">$240</td>
                                </tr>
                                <tr>
                                    <th className="bg-secondary text-white">Delivery</th>
                                    <td className="text-center">$00</td>
                                </tr>
                                <tr>
                                    <th className="bg-secondary text-white">Totals</th>
                                    <td className="text-center fw-bold">$240</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-center my-3">
                            <Link to="/check-out">
                                <button className="btn shadow-none custom-btn px-3 py-2 rounded-pill">PROCEED TO CHECKOUT</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Cart;