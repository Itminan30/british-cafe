import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto'>
                <img className='w-2/4 my-5 mx-auto' src="/logo.png" alt="" />
                <h2 className='text-5xl my-5 font-bold text-center'>404 Not Found</h2>
                <Link to='/'>
                    <Button className='bg-red-500 mx-auto my-5'>Go Back to HomePage</Button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;