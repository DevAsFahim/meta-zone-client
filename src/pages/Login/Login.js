import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const profile = form.profile.value;
        console.log(name, profile, email, password);
    }
    return (
        <div className="hero py-20 connect min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">Login Here!</h1>
                </div>
                <form onSubmit={handleLogin} className="card w-full bg-base-100">
                    <div className="card-body py-14">
                        <div className="form-control">
                            <input type="text" placeholder="Your Name" name='name' className="input " />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Profile Photo" name='profile' className="input " />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" name='email' className="input " required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" name='password' className="input " required />
                        </div>
                        <label className="label">
                            <p>Already have an account? <Link to='/signup' className='font-bold text-orange-500'>Sign Up</Link></p>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;