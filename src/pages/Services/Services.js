import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div>
            this is service
        </div>
    );
};

export default Services;