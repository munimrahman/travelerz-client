import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import generator from "generate-password";

const AddPackage = () => {
    const { register, reset, handleSubmit } = useForm();
    const [pass, setPass] = useState();
    // const [key, setKey] = useState("");

    const generatePassword = () => {
        const pwd = generator.generate({
            length: 10,
            lowercase: false,
            uppercase: true,
            numbers: true,
            symbols: false
        });
        setPass(pwd);
    }
    const onSubmit = (data) => {
        data.key = pass
        fetch('http://localhost:5000/packages', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Package Added Successfully!",
                        text: `Product Unique Key: ${pass}`,
                        button: "OK!",
                    });
                }
            })
        reset()
        console.log(data);
    };
    return (
        <div className="bg-eee">
            <div className="container mx-auto pt-4">
                <h1 className="py-3 text-center">Add a New Package</h1>
                <div className="w-75 mx-auto pb-5">
                    <div className="d-flex justify-content-center">
                        <form className="mt-4 row" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-12 col-md-6">
                                <div className="mb-2">
                                    <label className="mb-2">Package Name*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("name", { required: true })}
                                        placeholder="Package Name"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Location*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("location", { required: true })}
                                        placeholder="Package Name"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Country*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("country", { required: true })}
                                        placeholder="Package Name"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Total Days/Nights*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("days", { required: true })}
                                        placeholder="Package Name"
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
                                        placeholder="Package Price"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label className="mb-2">Image URL-1*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("img1", {
                                            required: true
                                        })}
                                        placeholder="Package Img Should Be 900px * 600px"
                                    />
                                    <small>Package Img Should Be 900px * 600px</small>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Image URL-2*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("img2", {
                                            required: true
                                        })}
                                        placeholder="Package Img Should Be 900px * 600px"
                                    />
                                    <small>Package Img Should Be 900px * 600px</small>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Image URL-3*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("img3", {
                                            required: true
                                        })}
                                        placeholder="Package Img Should Be 900px * 600px"
                                    />
                                    <small>Package Img Should Be 900px * 600px</small>
                                </div>
                                {/* <div className="mb-3">
                                    <label className="mb-2">Product Unique Key</label> <br />
                                    <div className="row">
                                        <div className="col-8">
                                            <input
                                                className="form-control shadow-none"
                                                type="text"
                                                {...register("key", {
                                                    required: true,
                                                    minLength: 10,
                                                    maxLength: 10
                                                })}
                                                defaultValue={pass}
                                                placeholder="Please Don't Fill Manually"
                                                disabled
                                            />
                                        </div>
                                        <button className="col-4 custom-btn rounded-pill">Generate Key</button>
                                    </div>
                                    <small>Fill It By Generate Key Button For Avoiding Unexpected Error</small>
                                </div> */}
                            </div>

                            {/* <div className="mb-3">
                                <label className="mb-2">Descriptions*</label> <br />
                                <textarea
                                    className="form-control shadow-none"
                                    type="text"
                                    {...register("des", {
                                        required: true
                                    })}
                                    placeholder="Package Descriptions"
                                    rows="5"
                                />
                            </div> */}
                            <div onClick={generatePassword} className="text-center">
                                <input className="btn custom-btn py-3 px-4 shadow-none rounded-pill fw-bold py-2 px-3" type="submit" value="Add Product" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;