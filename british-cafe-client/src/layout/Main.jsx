import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from 'flowbite-react';
import FooterSection from '../components/FooterSection/FooterSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Main;