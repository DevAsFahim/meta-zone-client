import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { MutatingDots } from 'react-loader-spinner';


const Login = () => {
    const { login } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false)
    const [authError, setAuthError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setAuthError('')
        setSuccess(false)
        setLoading(true)

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                setLoading(false)
                navigate('/')
            })
            .catch(err => {
                console.error(err);
                setAuthError(err.message)
            })
    }

    if (loading) {
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
        <div className="hero py-20 connect min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">Login Here!</h1>
                </div>
                <form onSubmit={handleLogin} className="card w-full bg-base-100">
                    <div className="card-body py-14">
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" name='email' className="input " required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" name='password' className="input " required />
                        </div>
                        <label className="label">
                            <p>Already have an account? <Link to='/signup' className='font-bold text-orange-500'>Sign Up</Link></p>
                        </label>
                        {success && <p className="text-green-600">User Logged in Successfully!</p>}
                        <p className="text-red-600"> {authError} </p>
                        <div className="form-control mt-6">
                            <button className="btn default-btn">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;