import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <nav className="navbar navbar-expand-lg  sticky-top navbar-light nav-style py-0 mt-2 mb-3">
                <div className="container-fluid px-5">
                    <Link className="navbar-brand fredoka-font" to="/">Travelerz</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/packages">Packages</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
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
                                        <Link className="dropdown-item hover-color" to="/my-orders">My Orders</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/add-package">Add New Package</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/add-product">Add New Product</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item hover-color" to="/manage-all-orders">Manage All Orders</Link>
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