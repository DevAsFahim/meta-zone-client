import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Service from '../Services/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([])
    const [blogs, setBlogs] = useState([])

    // get service api
    useEffect(() => {
        fetch('http://localhost:5000/serviceshome')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    // get blogs api
    useEffect(() => {
        fetch('http://localhost:5000/blogshome')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
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

            {/* service section */}
            <div className="services-home container m-auto ">
                <div className="flex justify-center flex-wrap px-4 items-end">
                    <div className="text-center mt-14 ">
                        <p className='text-orange-600'>Services</p>
                        <h3 className="text-5xl font-bold mt-3">What I Do</h3>
                    </div>
                </div>
                <div className='grid px-4 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 container m-auto'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div className='text-center pt-10 pb-20'>
                    <Link to='/services' className="btn default-btn border-none btn-wide text-white">See All</Link>
                </div>
            </div>

            {/* show section */}
            <div className="show_img">

            </div>


            {/* blog seciton */}
            <div className="services-home container m-auto ">
                <div className="flex justify-between flex-wrap px-4 items-end">
                    <div className="text-left mt-14 ">
                        <p className='text-orange-600'>Blogs</p>
                        <h3 className="text-5xl font-bold mt-3">Read My Blogs</h3>
                    </div>
                    <Link to='/blogs' className="btn default-btn border-none text-white">See All</Link>
                </div>
                <div className='grid px-4 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 container m-auto'>
                    {
                        blogs.map(blog => <Blog
                            key={blog._id}
                            blog={blog}
                        ></Blog>)
                    }
                </div>
                
            </div>


        </>
    );
};

export default Home;