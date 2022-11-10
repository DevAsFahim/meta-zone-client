import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { MutatingDots } from 'react-loader-spinner';
import { FaGoogle } from 'react-icons/fa';
import Head from '../../layout/Head';


const Login = () => {
    const { login, loginWithGoogle } = useContext(AuthContext)
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

    // google sign in
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate("/")
                console.log(user);
            }).catch((error) => {
                setAuthError(error.message)
            });
    }

    // loader
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
            <Head title='Login'></Head>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">Login Here!</h1>
                </div>
                <div className="card py-14">
                    <form onSubmit={handleLogin} className="w-full">
                        <div className="card-body">
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
                    <div className="form-control mt-6 px-8">
                        <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary"> <FaGoogle className='mr-4'></FaGoogle> Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;