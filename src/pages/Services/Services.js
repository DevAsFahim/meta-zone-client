import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])



    return (
        <>  
            <div className="text-center mt-14">
                <p className='text-orange-600'>Services</p>
                <h3 className="text-5xl font-bold mt-3">What I Do</h3>
            </div>
            <div className='grid px-3 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 container m-auto'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;