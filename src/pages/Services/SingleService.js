import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './SingleService.css'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider'
import Review from '../Review/Review';

const SingleService = () => {
    const service = useLoaderData()
    const { _id, description, img, price, ratings, sub_title, title } = service;
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    const handleAddReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = user?.email;
        const img = form.img.value;
        const message = form.message.value;

        const review = {
            serviceId: _id,
            serviceName: title,
            email,
            img,
            message,
            name: user.displayName
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('your review added')
                    form.reset()
                    console.log(data);
                }
            })
            .catch(er => console.error(er))
    }

    useEffect( () => {
        fetch(`http://localhost:5000/reviews?serviceId=${service._id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
        .catch(er => console.error(er))
    } , [service?._id])

    return (
        <div className='container m-auto'>
            <div className="text-center mt-14 ">
                <p className='text-orange-600'>Details</p>
                <h3 className="text-5xl font-bold mt-3">Service Details</h3>
            </div>
            <div className="service_details md:flex-nowrap flex-wrap  py-20">
                <div className="service_review px-4">

                    {
                        user?.uid ?

                            <div className="connect">
                                <form onSubmit={handleAddReview} className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                                    <div className="card-body">
                                        <div className="form-control">
                                            <input type="text" placeholder="email" value={user.email} className="input" readOnly />
                                        </div>
                                        <div className="form-control">
                                            <input type="text" name='img' placeholder="Your img" defaultValue={user.photoURL} className="input" />
                                        </div>
                                        <div className="form-control">
                                            <textarea name='message' className="textarea mt-4 h-24 w-full" placeholder="Your review" required></textarea>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn default-btn">Add Review</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            :

                            <p>Please <Link className='text-orange-600 font-bold link pb-5' to='/login'>Login</Link> to add review</p>
                    }

                    <div className='users_review mt-8 rounded-xl px-5 shadow-2xl'>
                        <p className="text-2xl text-orange-600 font-bold">Reviews</p>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }                    
                    </div>
                </div>
                <div className="details_container px-4">
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