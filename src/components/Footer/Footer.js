import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-main pt-3">
                <div className="mx-5 row py-3">
                    <div className="col-12 col-md-3 d-flex justify-content-center align-items-center py-3">
                        <i className="fab fa-facebook-square fs-2 px-3 footer-icn-font"></i>
                        <i className="fab fa-twitter-square fs-2 px-3 footer-icn-font"></i>
                        <i className="fab fa-linkedin fs-2 px-3 footer-icn-font"></i>
                        <i className="fab fa-youtube fs-2 px-3 footer-icn-font"></i>

                    </div>
                    <div className="col-12 col-md-3 d-flex align-items-center py-3">
                        <i className="fas fa-map-marker-alt footer-icn-font"></i>
                        <div className="px-4">
                            <h5 className="fw-bold footer-title-color">Visit Our Location</h5>
                            <p className="m-0">250 Main Street, New York</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 d-flex align-items-center py-3">
                        <i className="fas fa-phone-alt footer-icn-font"></i>
                        <div className="px-4">
                            <h5 className="fw-bold footer-title-color">Give us a Call</h5>
                            <p className="m-0">+ (12) 123 - 456 -789</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 d-flex align-items-center py-3">
                        <i className="fas fa-envelope footer-icn-font"></i>
                        <div className="px-4">
                            <h5 className="fw-bold footer-title-color">Send us a Message</h5>
                            <p className="m-0">info@travelerz.com</p>
                        </div>
                    </div>

                </div>
                <hr className="text-white container" />
                <div className="container mx-auto justify-content-center py-5 row">

                    <div className="py-2 col-12 col-md-4">
                        <h4 className="fw-bold pb-3 footer-title-color">Important Links</h4>
                        <ul className="lh-lg list-unstyled text-decoration-underline">
                            <li>About Us</li>
                            <li>FAQ Page</li>
                            <li>Guided Tours</li>
                            <li>Manage My Booking</li>
                            <li>Meet Our Guides</li>
                            <li>Careers</li>
                            <li>View All Trips</li>
                        </ul>
                    </div>
                    <div className="py-2 col-12 col-md-4">
                        <h4 className="fw-bold pb-3 footer-title-color">Our Services</h4>
                        <ul className="lh-lg list-unstyled text-decoration-underline">
                            <li>View all Services</li>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                            <li>Service 4</li>
                            <li>Service 5</li>
                            <li>Service 6</li>
                        </ul>
                    </div>
                    <div className="py-2 col-12 col-md-4">
                        <h4 className="fw-bold pb-3 footer-title-color">About Us</h4>
                        <p>We bring together travellers from all corners of the globe to discover new cultures and a little part of themselves along the way. Across 350+ global trips we sort out the stressful stuff like transport and accommodation.</p>
                        <button className="btn custom-btn py-2 px-3 rounded-pill shadow-none fw-bold text-white">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3 text-color-gray text-center">
                <Link className="icon-color p-3" to="/">Privacy</Link>
                <Link className="icon-color p-3" to="/">Terms</Link>
                <Link className="icon-color p-3" to="/">Sitemap</Link>
                <br />
                <small className="icon-color">Copyright © 2021 Travelerz. All Right Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;