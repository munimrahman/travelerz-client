import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateOrder = () => {
    const { updateOrderId } = useParams();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [order, setOrder] = useState({ address: '', city: '', country: '', des: '', desOptional: '', email: '', item: {}, name: '', orderDate: '', orderKey: {}, orderStatus: '', paymentMethod: {}, phone: '', zip: '', _id: '' })
    console.log(order?.orderStatus);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${updateOrderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const onSubmit = (data) => {
        fetch(`http://localhost:5000/orders/${updateOrderId}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Order Confirmed Successfully!",
                        icon: "success",
                        button: "OK",
                    });
                    history.push('/manage-all-orders')
                }
            })
    };

    const handleStatusChange = e => {
        const updateOrderStatus = e.target.value;
        const updateOrder = { address: order.address, city: order.city, country: order.country, des: order.des, desOptional: order.desOptional, email: order.email, item: order.item, name: order.name, orderDate: order.orderDate, orderKey: order.orderKey, orderStatus: updateOrderStatus, paymentMethod: order.paymentMethod, phone: order.phone, zip: order.zip, _id: order._id }
        setOrder(updateOrder)
    }
    return (
        <div className="bg-eee">
            <div className="container mx-auto py-4">
                <h1 className="py-3 text-center">Update Order No: {updateOrderId}</h1>
                <div>
                    <div className="w-50 mx-auto">
                        <h4 className="text-center">Order is <span className="text-danger">Pending</span>. If you want to confirm the order, please type "<span className="text-success">CONFIRM</span>" instate of Pending!</h4>
                    </div>
                    <div className="d-flex justify-content-center">
                        <form className="mt-4 w-25" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-2 text-center">
                                <label className="mb-2 fw-bold">Update Order Status</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("orderStatus", { required: true })}
                                    value={order?.orderStatus}
                                    placeholder="Order Status"
                                    // value={user?.name}
                                    onChange={handleStatusChange}
                                />
                            </div>
                            <div className="text-center">
                                <input className="btn btn-primary shadow-none rounded-pill fw-bold py-2 px-3" type="submit" value="Confirm Order" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateOrder;