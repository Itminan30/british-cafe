import React from 'react';
import Banner from '../Banner/Banner';
import ChefSection from '../ChefSection/ChefSection';
import RecipeTypes from '../RecipeTypes/RecipeTypes';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefSection></ChefSection>
            <RecipeTypes></RecipeTypes>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;