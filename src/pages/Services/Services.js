import React, { useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import Service from './Service';

const Services = () => {
    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    if(loading){
        return <div className='py-28 text-center'><div className='inline-block'><MutatingDots
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /></div></div> 
    }



    return (
        <>  
            <div className="text-center mt-14">
                <p className='text-orange-600'>Services</p>
                <h3 className="text-5xl font-bold mt-3">What I Do</h3>
            </div>
            <div className='grid px-3 md:grid-cols-2 lg:grid-cols-3 gap-7 py-20 container m-auto'>
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