import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import shopSoon from "../../images/shop-soon.jpg";

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://travelerz-server.vercel.app/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { name, price, img, des } = product || {};
  return (
    <div className="bg-eee">
      <div className="py-5">
        <div className="container row mx-auto">
          <div className="col-12 col-md-6 pb-3">
            <img src={img} className="img-fluid rounded" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <h1 className="fw-bold text-light-dark">{name}</h1>
            <div className="my-2">
              <i className="fas fa-star primary-text"></i>
              <i className="fas fa-star primary-text"></i>
              <i className="fas fa-star primary-text"></i>
              <i className="fas fa-star primary-text"></i>
              <i className="far fa-star primary-text"></i>
              <span className="ps-2 text-color-gray">(4 customer reviews)</span>
            </div>
            <p className="fw-bold fs-3 primary-text">Price: ${price}.00</p>
            <p className="service-font-size py-4">{des}</p>
            <div className="row align-items-center">
              <div className="col-12 col-md-6 pb-2">
                <input
                  className="form-control me-2 text-center shadow-none"
                  type="number"
                  defaultValue="1"
                  aria-label="Search"
                />
              </div>
              <div className="col-12 col-md-6">
                <button
                  className="btn custom-btn text-white fw-bold py-2 w-100 rounded-pill shadow-none"
                  type="submit"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add To Cart
                </button>
                {/* Modal Data */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title text-danger"
                          id="exampleModalLabel"
                        >
                          Important Notice!
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="text-center">
                          <h6>Our Online Shopping Section Coming Soon!</h6>
                          <img
                            src={shopSoon}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn shadow-none custom-btn"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="py-3 text-secondary service-font-size">
              Categories: <span className="primary-text">Accessories</span>,{" "}
              <span className="primary-text">Camping</span>,{" "}
              <span className="primary-text">Summer</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
