import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email);
    const [reviews, setReviews] = useState([])

    console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(er => console.error(er))
    }, [user?.email])


    return (
        <div>
            my reviews
        </div>
    );
};

export default MyReviews;