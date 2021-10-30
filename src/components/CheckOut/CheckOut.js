import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
    const [display, setDisplay] = useState(false);
    const [pay, setPay] = useState("")
    return (
        <div className="bg-eee py-4">
            <div className="container rounded bg-white shadow py-4 px-4">
                <h1 className="py-2">Check Out</h1>
                <div className="shadow border-3 border-top border-info mb-4">
                    <p className="p-3">Have a Coupon? <span onClick={() => { display === false ? setDisplay(true) : setDisplay(false) }} className="text-danger cursor">Click here to enter your code!</span></p>
                </div>
                {display && <div className="border rounded row shadow py-4 mx-0 my-3">
                    <p className="ps-3">If you have a coupon code, please apply it below.</p>
                    <div className="col-12 col-md-6 px-4">
                        <input type="text" name="" id="" placeholder="Coupon Code" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6">
                        <button className="btn custom-btn py-2 px-3 shadow-none rounded-pill">Apply Coupon</button>
                    </div>
                </div>}
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4>Billing details</h4>
                    </div>
                    <div className="col-12 col-md-6">
                        <h4>Additional information</h4>
                    </div>
                </div>
                <h4 className="my-3">Your Order</h4>
                <table class="table my-4">
                    <tbody>
                        <tr>
                            <th className="bg-secondary text-white">Products</th>
                            <th className="bg-secondary text-white text-center">Subtotals</th>
                        </tr>
                        <tr>
                            <td>
                                Acacia Marina <br />
                                All Inclusive Twin Room <br />
                                Dates: November 6, 2021 to November 13, 2021 <br />
                                People: 1 adults, 0 children <br />
                                Rooms: 1
                            </td>
                            <td className="text-center v-align">$240</td>
                        </tr>
                        <tr>
                            <th className="bg-secondary text-white">Tax</th>
                            <td className="text-center">$00</td>
                        </tr>
                        <tr>
                            <th className="bg-secondary text-white">Totals</th>
                            <td className="text-center fw-bold">$240</td>
                        </tr>
                    </tbody>
                </table>
                <div className="border rounded my-4 p-3">
                    <div class="form-check">
                        <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => setPay("cash")} />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Cash On Delivery
                        </label>
                        {pay === "cash" && <p className="border shadow-sm p-2 rounded w-75 mt-2">You can pay in cash to our courier when you receive the goods at your doorstep.</p>}
                    </div>
                    <div class="form-check">
                        <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setPay("bank")} />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Direct Bank Transfer
                        </label>
                        {pay === "bank" && <p className="border shadow-sm p-2 rounded w-75 mt-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>}
                    </div>
                    <div class="form-check">
                        <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => setPay("card")} />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Credit Card (Stripe)
                        </label>
                        {pay === "card" && <div className="border shadow-sm p-3 rounded w-75 mt-2">
                            <p>Pay with your credit card via Stripe. TEST MODE ENABLED. In test mode, you can use the card number 4242424242424242 with any CVC and a valid expiration date or check the Testing Stripe documentation for more card numbers.</p>
                            <div className="row">
                                <div className="col-12 my-3">
                                    <label htmlFor="cardBumber" className="my-1">Card Number *</label> <br />
                                    <input type="number" name="cardNumber" id="" placeholder="1234 1234 1234 1234" className="form-control shadow-none" />
                                </div>
                                <div className="col-6 my-3">
                                    <label htmlFor="cardBumber" className="my-1">Expiry Date *</label> <br />
                                    <input type="number" name="cardNumber" id="" placeholder="MM / YY" className="form-control shadow-none" />
                                </div>
                                <div className="col-6 my-3">
                                    <label htmlFor="cardBumber" className="my-1">Card Code (CVC) *</label> <br />
                                    <input type="number" name="cardNumber" id="" placeholder="CVC" className="form-control shadow-none" />
                                </div>
                            </div>
                            <div class="form-check col-12 mt-3">
                                <input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Save payment information to my account for future purchases.
                                </label>
                            </div>
                        </div>}
                    </div>
                    <hr />
                    <div className="text-end">
                        <Link to="/order-received">
                            <button className="btn shadow-none custom-btn py-3 px-4 rounded-pill px-3 py-2">PLACE ORDER</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CheckOut;