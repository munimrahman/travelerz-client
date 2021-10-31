import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data.orders))
    }, [])
    const handleDelete = id => {
        swal({
            title: "Are You Sure to Delete?",
            text: "Once deleted, you will not be able to recover this order data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/orders/${id}`, {
                        method: "DELETE",
                        headers: { 'content-type': 'application/json' }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Order has been deleted!", {
                                    icon: "success",
                                });
                            }
                            const newOrders = orders.filter(order => order._id !== id)
                            setOrders(newOrders)
                        })

                } else {
                    swal("Order Info is Safe!");
                }
            });
    }
    return (
        <div className="bg-eee">
            <div className="container py-4">
                <h1 className="mb-4">Manage All Orders</h1>
                <div className="row bg-white rounded shadow p-4">
                    <div className="col-12 col-md-2">
                        <h6 className="py-2 border-bottom border-dark">Manage Orders</h6>
                        <h6 className="py-2 border-bottom border-dark">Manage Users</h6>
                        <h6 className="py-2 border-bottom border-dark">Add New Package</h6>
                        <h6 className="py-2 border-bottom border-dark">Update Package</h6>
                    </div>
                    <div className="col-12 col-md-10 border-start">
                        <h4 className="text-center">All Orders</h4>
                        <table class="table">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">#</th>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">User Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders?.map((order, index) => <tr className="text-center">
                                        <th scope="roEDw">{index + 1}</th>
                                        <td>{order?._id}</td>
                                        <td>{order?.name}</td>
                                        <td>{order?.email}</td>
                                        <td>
                                            {order?.orderStatus === 'CONFIRM' ? <span class="badge bg-success">Confirm</span> : <span class="badge bg-warning">Pending</span>}
                                        </td>
                                        <td>
                                            <Link to={`/update-order/${order?._id}`}>
                                                <button className="mx-1 btn btn-success shadow-none py-1"><i class="fas fa-edit"></i></button>
                                            </Link>
                                            <button onClick={() => handleDelete(order?._id)} className="mx-1 btn btn-danger shadow-none py-1"><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;