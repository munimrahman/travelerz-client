import React from 'react';
import img from '../../images/packageImg6.jpg'

const BlogCard = () => {
    return (
        <div className="bg-white mb-4 rounded">
            <img src={img} alt="" className="img-fluid img-h rounded-top" />
            <div className="pb-4 px-5">
                <h2 className="py-4">Beautiful China</h2>
                <p>Al alit emnos lnipedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. An eam dico similique, ut sint posse sit, eum sumo diam ea. Cu omnis consequat tincidunt sit, stet cibo blandit dicant definitionem eos an. Tiber consectetuer in mei. Al alit emnos lnipedit ius, vel...</p>
                <span className="fw-bold me-3">September 7, 2021</span>
                <span className="fw-bold">2 Comments</span>
            </div>
        </div>
    );
};

export default BlogCard;