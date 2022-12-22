import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../../assets/image/logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
            });
    }

    return (
        <div className="navbar bg-slate-800 lg:px-9 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff"})}  to='/'>Home</NavLink></li>
                        <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff"})} to='/services'>Services</NavLink></li>
                        <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff"})}  to='/blogs'>Blog</NavLink></li>
                        {
                            user?.uid &&
                                <>
                                    <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff"})}to='/myreviews'>My Reviews</NavLink></li>
                                    <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff"})} to='/addservice'>Add Service</NavLink></li>
                                    <li><button onClick={handleLogOut}>Logout</button></li>
                                </>
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"> <img src={logo} className='mr-3' alt="" /> MetaZone</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff", background: "transparent"})} to='/'>Home</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff", background: "transparent"})}  to='/services'>Services</NavLink></li>
                    <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff", background: "transparent"})} to='/blogs'>Blog</NavLink></li>
                    {
                        user?.uid &&
                            <>
                                <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff", background: "transparent"})} to='/myreviews'>My Reviews</NavLink></li>
                                <li><NavLink style={({isActive}) => ({color: isActive ? "orange" : "#fff", background: "transparent"})} to='/addservice'>Add Service</NavLink></li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </>
                            
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt='' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <>
                            <Link to='/signup' className="btn btn-ghost mr-3">Sign up</Link>
                            <Link to='/login' className="btn default-btn border-none text-white">Log in</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;