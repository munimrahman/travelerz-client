import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from '../../images/blog-img.jpg'

const HomeBlogCard = () => {
    return (
        <Link to="" className="text-decoration-none text-dark">
            <div className="row my-3 home-blog-card">
                <div className="col-12 col-md-3">
                    <img src={blogImg} className="img-fluid rounded" alt="" />
                </div>
                <div className="col-12 col-md-9">
                    <h3 className="fw-bold blog-title">Amazing Tour</h3>
                    <p>Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit...</p>
                    <span className="fw-bold">September 11, 2016</span>
                    <span className="ms-3 fw-bold"><i className="far fa-comment me-2"></i>1 Comment</span>
                </div>
            </div>
        </Link>
    );
};

export default HomeBlogCard;