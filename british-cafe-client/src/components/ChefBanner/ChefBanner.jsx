import { Button } from 'flowbite-react';
import React from 'react';
import LazyLoad from 'react-lazy-load';

const ChefBanner = ({ chef }) => {
    const { id, name, picture_url, years_of_experience, num_recipes, num_likes, bio } = chef;
    return (
        <div className=' bg-red-50 py-5 lg:py-16'>
            <div className='grid grid-cols-1 mx-5 items-center gap-0 lg:gap-20 lg:grid-cols-7 lg:mx-36'>
                <div className='col-span-1 row-start-1 lg:row-start-1 lg:col-span-4'>
                    <LazyLoad offset={300}>
                        <img src={picture_url} alt="" />
                    </LazyLoad>
                </div>

                <div className='col-span-1 row-start-2 lg:row-start-1 lg:col-span-3'>
                    <h1 className='text-4xl lg:text-5xl font-bold my-5 lg:my-10'>
                        {name}
                    </h1>
                    <p className='text-slate-600 font-semibold mb-7'>
                        {bio}
                    </p>
                    <div className='flex gap-5'>
                        <Button className='bg-red-600 hover:bg-red-600 px-2 py-1 rounded-lg'>
                            <span className='font-semibold text-lg'>{years_of_experience} Years of Experience</span>
                        </Button>
                        <Button className='bg-red-600 hover:bg-red-600 px-2 py-1 rounded-lg'>
                            <span className='font-semibold text-lg'>{num_recipes} Recipes</span>
                        </Button>
                    </div>
                    <Button className='bg-red-600 hover:bg-red-600 px-2 py-1 rounded-lg mt-4'>
                        <span className='font-semibold text-lg'>Liked By {num_likes} people</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;