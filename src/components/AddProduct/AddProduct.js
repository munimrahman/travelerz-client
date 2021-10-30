import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddProduct = () => {
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Product Added Successfully!",
                        icon: "success",
                        button: "OK!",
                    });
                }
            })
        reset()
    };
    return (
        <div className="bg-eee">
            <div className="container mx-auto pt-4">
                <h1 className="py-3 text-center">Add a New Product</h1>
                <div className="w-50 mx-auto pb-5">
                    <div className="d-flex justify-content-center">
                        <form className="mt-4 w-75" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-2">
                                <label className="mb-2">Product Name*</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Product Name"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="mb-2">Price*</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="number"
                                    {...register("price", {
                                        required: true
                                    })}
                                    placeholder="Product Price"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Image URL*</label> <br />
                                <input
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("img", {
                                        required: true
                                    })}
                                    placeholder="Product Img URL"
                                />
                                <small>Product Img Should Be 500px * 500px</small>
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Descriptions*</label> <br />
                                <textarea
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("des", {
                                        required: true
                                    })}
                                    placeholder="Product Descriptions"
                                    rows="5"
                                />
                            </div>
                            <div className="text-center">
                                <input className="btn custom-btn py-3 px-4 shadow-none rounded-pill fw-bold py-2 px-3" type="submit" value="Add Product" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;