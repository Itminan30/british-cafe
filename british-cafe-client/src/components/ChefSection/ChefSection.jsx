import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const ChefSection = () => {
    const chefs = useLoaderData();
    return (
        <div className='mt-10 lg:mt-20'>
            <h2 className='text-red-600 text-center text-4xl lg:text-5xl font-bold mb-5 lg:mb-10'>~ Our Chefs ~</h2>
            <div className=' grid lg:grid-cols-3 gap-5 lg:px-20'>
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default ChefSection;