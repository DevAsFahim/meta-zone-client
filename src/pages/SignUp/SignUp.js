import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { MutatingDots } from 'react-loader-spinner';
import Head from '../../layout/Head';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [authError, setAuthError] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        setAuthError('')
        setSuccess(false)
        setLoading(true)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                navigate('/')
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setAuthError(err.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
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
            <Head title='Sign up'></Head>
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-6">Sign Up Here!</h1>
                </div>
                <form onSubmit={handleSignUp} className="card w-full bg-base-100">
                    <div className="card-body py-14">
                        <div className="form-control">
                            <input type="text" placeholder="Your Name" name='name' className="input " />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Profile Photo" name='photoURL' className="input " />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" name='email' className="input " required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" name='password' className="input " required />
                        </div>
                        <label className="label">
                            <p>Already have an account? <Link to='/login' className='font-bold text-orange-500'>Login</Link></p>
                        </label>
                        {success && <p className="text-green-600">User created Successfully!</p>}
                        <p className="text-red-600"> {authError} </p>
                        <div className="form-control mt-6">
                            <button className="btn default-btn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;