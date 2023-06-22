import React from 'react';

const RecipeTypes = () => {
    return (
        <div className='mt-10 lg:mt-20'>
            <h2 className='text-red-600 text-center text-2xl lg:text-5xl font-bold mb-5 lg:mb-10'>
                ~Types of Recipes~
            </h2>

            <div className='flex flex-col lg:flex-row justify-center gap-10 items-center'>
                <div className='border w-80 flex flex-col justify-center items-center rounded-lg p-5'>
                    <img className='w-40 mb-5' src="/fast-food.png" alt="" />
                    <h3 className='text-2xl font-semibold'>Fast Food Recipes</h3>
                </div>
                <div className='border w-80 flex flex-col justify-center items-center rounded-lg p-5'>
                    <img className='w-40 mb-5' src="/prawns.png" alt="" />
                    <h3 className='text-2xl font-semibold'>Gourmet Food Recipes</h3>
                </div>
                <div className='border w-80 flex flex-col justify-center items-center rounded-lg p-5'>
                    <img className='w-40 mb-5' src="/biryani.png" alt="" />
                    <h3 className='text-2xl font-semibold'>Traditional Food Recipes</h3>
                </div>
            </div>
        </div>
    );
};

export default RecipeTypes;