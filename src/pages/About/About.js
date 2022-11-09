import React from 'react';
import aboutImg from '../../assets/image/about.png'

const About = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img src={aboutImg} style={{'box-shadow': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e'}} className="w-3/5 rounded-lg p-6" alt=''/>
                    <div>
                        <small className='text-orange-500'>HAVE A LOOK ABOUT ME</small>
                        <h1 className="text-5xl font-bold text-zinc-200 mt-6">About</h1>
                        <p className="py-6"> I am Jone Lee.I have more than 6 years experience in Adobe Photoshop,Adobe Illustrator and Adobe In design.I am expert in clipping path,background remove,transparent background,photo editing,Image retouch,Image manipulation,Image masking.I am here to carry out your activity. Apart from this i also run my own business by providing online services to international customers like Photo editing, Adobe Photoshop, Adobe Lightroom, color grading, etc.</p>
                        <p className="py-6">Apart from this i also run my own business by providing online services to international customers like Photo editing, Adobe Photoshop, Adobe Lightroom, color grading, graphic designer, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;