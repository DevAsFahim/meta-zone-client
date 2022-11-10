import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';


const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(er => console.error(er))
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this review')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        }
    }


    return (
        <>
            <div className="text-center mt-14">
                <p className='text-orange-600'>My Review</p>
                <h3 className="text-5xl font-bold mt-3">Own Reviews</h3>
            </div>

            {
                reviews.length > 0 ?
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 px-4'>
                        {
                            reviews.map(review => <ReviewCard
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></ReviewCard>)
                        }
                    </div>
                    :
                    <h3 className="text-5xl text-center py-9">No reviews were added</h3>
            }
        </>
    );
};

export default MyReviews;