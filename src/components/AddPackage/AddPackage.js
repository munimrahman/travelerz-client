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
        fetch('https://wicked-wizard-56509.herokuapp.com/packages', {
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
                                        placeholder="Kuakata, Barishal"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Country*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("country", { required: true })}
                                        placeholder="Bangladesh"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="mb-2">Total Days/Nights*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("days", { required: true })}
                                        placeholder="2 days/3 nights"
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
                                        placeholder="Img Should Be 900px * 600px"
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
                                        placeholder="Img Should Be 900px * 600px"
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
                                        placeholder="Img Should Be 900px * 600px"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Offer Text</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("offerText", {
                                            required: true
                                        })}
                                        placeholder="POPULAR/NEW/BEST"
                                    />
                                </div>
                            </div>
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