import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState();
  const [singleItem, setSingleItem] = useState();
  const { user } = useAuth();
  // console.log(orders);
  useEffect(() => {
    fetch(`https://travelerz-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  }, []);

  // const myOrders = orders?.filter(order => order.email === user?.email)
  // orders?.map(order => console.log(order?.item?.cart.length))
  // console.log(singleItem);
  const handleDelete = (id) => {
    swal({
      title: "Are You Sure to Delete?",
      text: "If deleted, order will be canceled!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://travelerz-server.vercel.app/orders/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Order has been Canceled!", {
                icon: "success",
              });
            }
            const newOrders = orders.filter((order) => order._id !== id);
            setOrders(newOrders);
          });
      } else {
        swal("Order Info is Safe!");
      }
    });
  };
  return (
    <div className="bg-eee">
      <div className="container py-4">
        <h1 className="mb-4">Manage My Orders</h1>
        <div className="row bg-white rounded shadow p-4">
          <div className="col-12 col-md-2">
            <h6 className="py-2 border-bottom border-dark">My Profile</h6>
            <h6 className="py-2 border-bottom border-dark">My Orders</h6>
            <h6 className="py-2 border-bottom border-dark">Update Profile</h6>
            <h6 className="py-2 border-bottom border-dark">Log Out</h6>
          </div>
          <div className="col-12 col-md-10 border-start">
            <h4 className="text-center">My Orders</h4>
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">Total Items</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, index) => (
                  <tr className="text-center">
                    <th scope="roEDw">{index + 1}</th>
                    <td>{order?._id}</td>
                    <td>{order?.item?.cart.length}</td>
                    <td>
                      {order?.orderStatus === "CONFIRM" ? (
                        <span className="badge bg-success">CONFIRMED</span>
                      ) : (
                        <span className="badge bg-warning">PENDING</span>
                      )}
                    </td>
                    <td>
                      <Link to={`/order-received/${order._id}`}>
                        <button
                          className="mx-1 btn btn-info text-white shadow-none py-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="View Order"
                        >
                          <i className="far fa-eye"></i>
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="mx-1 btn btn-danger shadow-none py-1"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
