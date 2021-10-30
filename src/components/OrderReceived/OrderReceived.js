import React from 'react';
import './OrderReceived.css'

const OrderReceived = () => {
    return (
        <div className="bg-eee py-4">
            <div className="container rounded bg-white shadow py-4 px-4">
                <h1 className="py-2">Order Received</h1>
                <p>Thank you. Your order is pending. Please wait for confirmation!</p>
                <div className="d-flex">
                    <div className="side-border pe-3">
                        <small className="s-font">ORDER ID:</small>
                        <p className="m-0">617ce395ae1b49942c03c4d0</p>
                    </div>
                    <div className="side-border px-3">
                        <small className="s-font">DATE:</small>
                        <p className="mb-0">October 29, 2021</p>
                    </div>
                    <div className="side-border px-3">
                        <small className="s-font">EMAIL:</small>
                        <p className="mb-0">munimrh@gmail.com</p>
                    </div>
                    <div className="side-border px-3">
                        <small className="s-font">TOTAL:</small>
                        <p className="mb-0">830.00$</p>
                    </div>
                    <div className="ps-3">
                        <small className="s-font">PAYMENT METHOD:</small>
                        <p className="mb-0">Direct bank transfer</p>
                    </div>
                </div>
                <h4 className="mt-5 mb-3">Order details</h4>
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
                            <th className="bg-secondary text-white">Payment method:</th>
                            <td className="text-center fw-bold">Direct bank transfer</td>
                        </tr>
                        <tr>
                            <th className="bg-secondary text-white">Totals</th>
                            <td className="text-center fw-bold">$240</td>
                        </tr>
                    </tbody>
                </table>
                <h4 className="mb-4">Billing address</h4>
                <div className="border rounded p-3">
                    MD Munim Rahman <br />
                    Salia Bakpur, Banaripara <br />
                    Barishal <br />
                    8530 <br />
                    Bangladesh <br />
                    01892654812 <br />
                    munimrh@gmail.com
                </div>
            </div>
        </div >
    );
};

export default OrderReceived;