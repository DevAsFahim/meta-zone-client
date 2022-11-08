import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import './Service.css'


const Service = ({service}) => {
    const {title, sub_title, img, price, ratings, description} = service;
    console.log(service);
    return (
        <div className=''>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {title} </h2>
                    <p className='text-orange-200'> {sub_title} </p>
                    <p>
                        {
                            description.slice(0, 100)
                        }...
                    </p>
                    <div className="card-actions justify-end">
                        <button className='service-arrow btn btn-ghost' onClick={handleDescription}> <FaLongArrowAltRight></FaLongArrowAltRight> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;