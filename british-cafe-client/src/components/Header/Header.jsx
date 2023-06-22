import { Avatar, Dropdown, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='bg-red-100 py-5'>
            <Navbar className='header mx-0 lg:mx-20' fluid={true} rounded={true} >
                <div className='flex' href="">
                    <img
                        src="/logo.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Chef Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-bold dark:text-white">
                        <Link to='/'>
                            <span className='text-red-500'>B</span>ritish <span className='text-red-500'>C</span>ooking
                        </Link>
                    </span>
                </div>

                <div className="flex md:order-2">
                    {user &&
                        <Tooltip content={user?.displayName}>
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<Avatar alt="" img={user?.photoURL} rounded={true} />}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user.displayName}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {user.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item onClick={logOut}>
                                    Log out
                                </Dropdown.Item>
                            </Dropdown>
                        </Tooltip>

                    }
                    <Navbar.Toggle />
                </div>


                <Navbar.Collapse>
                    <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }>
                        Home
                    </NavLink>
                    <NavLink to="/blog"
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }>
                        Blog
                    </NavLink>
                    <NavLink to="/about"
                        className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        }>
                        About Us
                    </NavLink>
                    {user ?
                        <Link onClick={logOut} className='ml-3' to="/">
                            Logout
                        </Link> :
                        <>
                            <NavLink to="/register"
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                Register
                            </NavLink>
                            <NavLink to='/login'
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                Login
                            </NavLink>
                        </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;