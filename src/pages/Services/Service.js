import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Service.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Service = ({ service }) => {
    const { title, price, sub_title, img, _id, description } = service;

    return (
        <>
            <div className="card single-service  bg-base-100 ">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className='p-5 cursor-zoom-in' src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>

                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {title} </h2>
                    <p className='text-orange-200'> {sub_title} </p>
                    <p>
                        {
                            description.slice(0, 100)
                        }...
                    </p>
                    <div className="card-actions justify-end items-center">
                        <p className="text-2xl text-slate-50">Price: <span className="text-orange-600 font-bold">${price}</span> </p>
                        <Link to={`/services/${_id}`} className='service-arrow btn btn-ghost'> <FaLongArrowAltRight></FaLongArrowAltRight> </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;