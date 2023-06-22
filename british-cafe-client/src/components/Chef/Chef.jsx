import { Button, Card } from 'flowbite-react';
import React from 'react';
import './Chef.css'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const Chef = ({ chef }) => {
    const { id, name, picture_url, years_of_experience, num_recipes, num_likes, bio } = chef;
    return (
        <div>
            <div className='bg-red-50 max-w-min mx-auto'>
                <LazyLoad offset={300}>
                    <Card className="w-80 lg:w-96 chef mx-auto" imgSrc={picture_url}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                        <div className="font-normal text-gray-700 dark:text-gray-400">
                            <p className='text-slate-600'>
                                <span className='font-semibold text-slate-700'>Years Of Experiance:</span> {years_of_experience}
                            </p>
                            <p className='text-slate-600'>
                                <span className='font-semibold text-slate-700'>Number of Recipes:</span> {num_recipes}
                            </p>
                            <p className='text-slate-600'>
                                <span className='font-semibold text-slate-700'>Likes:</span> {num_likes}
                            </p>
                            <p className='text-slate-600'>
                                <span className='font-semibold text-slate-700'>Short Biography:</span> {bio}
                            </p>
                            <div className='mt-4'>
                                <Link to={`/recipe/${id}`}>
                                    <Button className='bg-red-600 hover:bg-red-700 rounded-sm'>
                                        <span className='font-semibold text-md'>View Recipes</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </LazyLoad>
            </div>
        </div>
    );
};

export default Chef;