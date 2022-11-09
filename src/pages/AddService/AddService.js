import React from 'react';
import { Link } from 'react-router-dom';
import './AddService.css'

const AddService = () => {


    // adding service function
    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const sub_title = form.sub_title.value;
        const img = form.img.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const description = form.description.value;

        if(ratings > 5) {
            return alert("ratings can't be more than 5")
        }

        const service = {
            title,
            sub_title,
            img,
            price,
            ratings,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged) {
                alert('service added');
                form.reset()
            }
            console.log(data)
        })
        .catch(er => console.error(er))


    }

    return (
        <div className="hero py-20 connect add_service min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">Add a Service</h1>
                </div>
                <form onSubmit={handleAddService} className="card w-full bg-base-100">
                    <div className="card-body py-14">
                        <div className='flex justify-between gap-4 flex-wrap md:flex-nowrap'>
                            <div className="form-control w-full">
                                <input type="text" placeholder="Service Title" name='title' className="input " required />
                            </div>
                            <div className="form-control w-full">
                                <input type="text" placeholder="Sub-title" name='sub_title' className="input " required />
                            </div>
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Service image" name='img' className="input " required />
                        </div>
                        <div className='flex justify-between gap-4 flex-wrap md:flex-nowrap'>
                            <div className="form-control w-full">
                                <input type="text" placeholder="Booking Price" name='price' className="input " required />
                            </div>
                            <div className="form-control w-full">
                                <input type="number" placeholder="Ratings" name='ratings' className="input " required />
                            </div>
                        </div>
                        <div className="form-control">
                            <textarea name='description' className="textarea mt-7 h-24 w-full" placeholder="Your message" required></textarea>
                        </div>
                        {/* {success && <p className="text-green-600">User created Successfully!</p>}
                        <p className="text-red-600"> {authError} </p> */}
                        <div className="form-control mt-6">
                            <button className="btn default-btn">Add Service</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;