import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg  sticky-top navbar-light nav-style py-0 mt-2 mb-3">
                <div class="container-fluid px-5">
                    <Link class="navbar-brand" to="/">Travelerz</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-2">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link" to="/packages">Packages</Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li class="nav-item mx-2">
                                <Link class="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                            <li class="nav-item ms-2 me1">
                                <Link class="nav-link" to="/about-us">About Us</Link>
                            </li>
                            <li class="nav-item ms-1 me-3">
                                <Link class="nav-link position-relative" to="/cart">
                                    <i class="fas fa-shopping-bag fs-4"></i>
                                    <span class="position-absolute start-100 translate-middle badge rounded-pill custom-btn">
                                        1
                                    </span>
                                </Link>
                            </li>
                            {user?.email && <li className="nav-item dropdown fw-bold">
                                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://avatars.githubusercontent.com/u/53802153?v=4" className="user-img me-2" alt="" />
                                    {user.displayName}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">My Profile</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">My Orders</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">Add New Package</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/add-product">Add New Product</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/">Manage All Orders</Link>
                                    </li>
                                    <li>
                                        <button className="dropdown-item hover-color" onClick={logOut}>Sign Out <i className="fas fa-sign-out-alt fs-5 text-secondary"></i></button>
                                    </li>
                                </ul>
                            </li>}
                            {!user?.email && <li className="nav-item">
                                <Link className="nav-link rounded custom-btn2 text-white shadow-none me-3 mb-1 ms-2 fw-bold sign-in-btn" to="/sign-in">Sign In</Link>
                            </li>}
                            {!user?.email && <li className="nav-item">
                                <Link className="nav-link btn custom-btn shadow-none fw-bold text-white" to="/sign-up">Sign Up <i className="fas fa-long-arrow-alt-right"></i></Link>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;