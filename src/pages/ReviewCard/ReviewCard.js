import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({review}) => {
    const { message, serviceImg, serviceName } = review
    return (
        <div className='review_card'>
            <div className="card card-side ">
                <figure className='image'><img className='image' src={serviceImg} alt="Movie" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <h2 className="card-title"> {serviceName} </h2>
                    <p> {message} </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;