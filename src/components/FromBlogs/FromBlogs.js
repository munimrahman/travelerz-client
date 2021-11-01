import React from 'react';
import { Link } from 'react-router-dom';
import blogSide from '../../images/blog-side.png'
import HomeBlogCard from '../HomeBlogCard/HomeBlogCard';
import './FromBlogs.css'

const FromBlogs = () => {
    return (
        <div className="container row mx-auto align-items-center py-5">
            <div className="col-12 col-md-8">
                <h1 className="fredoka-font">From Our Blog</h1>
                <p className="py-3">From Our Blog
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>
                {/* blog cards */}
                <HomeBlogCard></HomeBlogCard>
                <HomeBlogCard></HomeBlogCard>
            </div>
            <div className="col-12 col-md-4">
                <Link to="/packages">
                    <img src={blogSide} className="img-fluid" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default FromBlogs;