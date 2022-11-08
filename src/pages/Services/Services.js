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
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 container m-auto'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div> 
    );
};

export default Services;