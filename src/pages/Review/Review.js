import React from 'react';

const Review = ({ review }) => {
    console.log(review);
    return (
        <div className='review mt-4'>

            <div className='flex items-center'>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img className='mr-2' src={review.img} alt='' />
                    </div>
                </label>
                <p className='font-semibold'>{review.name}</p>
            </div>
            <div className="review_text border py-4 px-3 rounded ml-10">
                {review.message}
            </div>

        </div>
    );
};

export default Review;