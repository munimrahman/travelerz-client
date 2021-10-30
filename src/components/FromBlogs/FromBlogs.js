import React from 'react';
import blogSide from '../../images/blog-side.png'
import blogImg from '../../images/blog-img.jpg'

const FromBlogs = () => {
    return (
        <div className="container row mx-auto align-items-center py-5">
            <div className="col-12 col-md-8">
                <h1>From Our Blog</h1>
                <p>From Our Blog
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>
                <div>
                    <div className="row my-3">
                        <div className="col-12 col-md-3">
                            <img src={blogImg} className="img-fluid" alt="" />
                        </div>
                        <div className="col-12 col-md-9">
                            <h3>Amazing Tour</h3>
                            <p>Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit,</p>
                            <span>September 11, 2016</span>
                            <span className="ms-3">1 Comment</span>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12 col-md-3">
                            <img src={blogImg} className="img-fluid" alt="" />
                        </div>
                        <div className="col-12 col-md-9">
                            <h3>Amazing Tour</h3>
                            <p>Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit,</p>
                            <span>September 11, 2016</span>
                            <span className="ms-3">1 Comment</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4">
                <img src={blogSide} alt="" />
            </div>
        </div>
    );
};

export default FromBlogs;