import React, { useEffect, useState } from 'react';
import ChefBanner from '../ChefBanner/ChefBanner';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecipePage = () => {
    const { id } = useParams();
    const recipes = useLoaderData();
    const [chef, setChef] = useState({});
    useEffect(() => {
        fetch(`https://british-cafe-server.vercel.app/chef/${id}`)
            .then(res => res.json())
            .then(data => setChef(data));
    }, [])
    return (
        <div>
            <ChefBanner chef={chef}></ChefBanner>

            <div className='my-20'>
                <h3 className='text-center font-bold text-4xl mb-7 text-red-600'>~ Recipes ~</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 w-11/12 gap-5 mx-auto'>
                    {
                        recipes.map((recipe,id) => <Recipe key={id} recipe={recipe}></Recipe>)
                    }
                </div>

            </div>
        </div>
    );
};

export default RecipePage;