import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const Blog = ({ blog }) => {
    const { _id, title, description, img} = blog;
    return (
        <>
            <div className="card single-service">
                <figure><img src={img} alt="BlogImage" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {title} </h2>
                    <p>
                        {
                            description.slice(0, 100)
                        }...
                    </p>
                    <div className="card-actions justify-end items-center">
                        <Link to={`/blogs/${_id}`} className='btn default-btn'> Details </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;