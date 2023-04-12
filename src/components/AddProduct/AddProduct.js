import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import generator from "generate-password";

const AddProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const [pass, setPass] = useState();
  // const [key, setKey] = useState("");

  const generatePassword = () => {
    const pwd = generator.generate({
      length: 10,
      lowercase: false,
      uppercase: true,
      numbers: true,
      symbols: false,
    });
    setPass(pwd);
  };

  // console.log();
  const onSubmit = (data) => {
    fetch("https://travelerz-server.vercel.app/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Product Added Successfully!",
            icon: "success",
            button: "OK!",
          });
        }
      });
    reset();
    console.log(data);
  };

  const generateUKey = () => {
    let d = new Date().getTime();
    const d2 =
      (typeof performance !== "undefined" &&
        performance.now &&
        performance.now() * 1000) ||
      0;
    return "xxxx4xxxyxxx".replace(/[xy]/g, function (c) {
      let r = Math.random() * 16;
      if (d > 0) {
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
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
                    required: true,
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
                    required: true,
                  })}
                  placeholder="Product Img URL"
                />
                <small>Product Img Should Be 500px * 500px</small>
              </div>
              <div className="mb-3">
                <label className="mb-2">Product Unique Key</label> <br />
                <div className="row">
                  <div className="col-8">
                    <input
                      className="form-control shadow-none"
                      type="text"
                      {...register("key", {
                        required: true,
                        minLength: 10,
                        maxLength: 10,
                      })}
                      defaultValue={pass}
                      placeholder="Please Don't Fill Manually"
                    />
                  </div>
                  <button
                    onClick={generatePassword}
                    className="col-4 custom-btn rounded-pill"
                  >
                    Generate Key
                  </button>
                </div>
                <small>
                  Fill It By Generate Key Button For Avoiding Unexpected Error
                </small>
              </div>
              <div className="mb-3">
                <label className="mb-2">Descriptions*</label> <br />
                <textarea
                  className="form-control shadow-none"
                  type="text"
                  {...register("des", {
                    required: true,
                  })}
                  placeholder="Product Descriptions"
                  rows="5"
                />
              </div>
              <div className="text-center">
                <input
                  className="btn custom-btn py-3 px-4 shadow-none rounded-pill fw-bold py-2 px-3"
                  type="submit"
                  value="Add Product"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
