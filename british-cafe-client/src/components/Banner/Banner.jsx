import { Button } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
        <div className=' bg-red-50 py-5 lg:py-16'>
            <div className='grid grid-cols-1 mx-5 items-center gap-0 lg:gap-20 lg:grid-cols-7 lg:mx-36'>
                <div className='col-span-1 row-start-2 lg:row-start-1 lg:col-span-3'>
                    <h1 className='text-5xl font-bold my-10 lg:text-6xl'>
                        Finest British Cuisines
                    </h1>
                    <p className='text-slate-600 font-semibold mb-7'>
                        Find the best recipes of British cuisines from the best chefs England have to offer. Here every recipe is hand picked by the chefs and is 100% authentic British cuisine.
                    </p>
                    <div>
                        <Button className='bg-red-600 hover:bg-red-700 px-3 py-2 rounded-sm'>
                            <span className='font-semibold text-lg'>Explore More</span>
                        </Button>
                    </div>
                </div>
                <div className='col-span-1 row-start-1 lg:row-start-1 lg:col-span-4'>
                    <img className='w-auto h-auto' src="/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;