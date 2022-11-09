import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './SingleService.css'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider'

const SingleService = () => {
    const service = useLoaderData()
    console.log(service);
    const { description, img, price, ratings, sub_title, title } = service;
    const { user } = useContext(AuthContext)
    console.log(user);

    return (
        <div className='container m-auto'>
            <div className="text-center mt-14 ">
                <p className='text-orange-600'>Details</p>
                <h3 className="text-5xl font-bold mt-3">Service Details</h3>
            </div>
            <div className="service_details  py-20">
                <div className="service_review ">

                    {
                        user?.uid ?

                            <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>

                            :

                            <p>Please <Link className='text-orange-600 font-bold link pb-5' to='/login'>Login</Link> to add review</p>
                    }

                    <div>
                        <p>peoples review</p>
                    </div>
                </div>
                <div className="details_container">
                    <h4 className="text-4xl font-bold text-slate-300 mb-5"> {title} </h4>
                    <img src={img} className='service_img' alt='' />
                    <div className='md:w-4/5 gap-3 flex flex-wrap justify-between mt-7'>
                        <p className='font-bold text-slate-50 text-3xl'>Booking Price: <span className="text-orange-500">${price}</span> </p>
                        <p className='font-bold text-slate-50 text-3xl'>Ratings: <span className="text-orange-500">{ratings}</span> </p>

                    </div>
                    <h5 className="text-3xl mt-9 mb-6"> {sub_title} </h5>
                    <p> {description} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;