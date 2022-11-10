import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Service from '../Services/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/serviceshome')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <>
            <div className="hero banner min-h-screen place-content-start ">
                <div className='pt-28 pl-10'>
                    <div className="w-1/2">
                        <h1 className="mb-5 text-5xl font-bold">Hi, I'm <span className='text-orange-500'>Jone Lee</span></h1>
                        <h1 className="mb-5 text-5xl font-bold">a Wedding Photography Expert</h1>
                        <p className="mb-5">I use high quality Photography camera to take picture. Having the best lens for wedding photography will help you capture those special moments, no matter where they occur. Lenses come in all shapes</p>
                    </div>
                </div>
            </div>
            <About></About>

            <div className="services-home container m-auto ">
                <div className="flex justify-between flex-wrap px-4 items-end">
                    <div className="text-left mt-14 ">
                        <p className='text-orange-600'>Services</p>
                        <h3 className="text-5xl font-bold mt-3">What I Do</h3>
                    </div>
                    <Link to='/services' className="btn default-btn border-none text-white">See All</Link>
                </div>
                <div className='grid px-4 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 container m-auto'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>


        </>
    );
};

export default Home;