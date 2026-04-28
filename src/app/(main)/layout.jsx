import BreakingNews from '@/components/Shared/BreakingNews';
import Header from '@/components/Shared/Header';
import Navbar from '@/components/Shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        {children}
        </>
    );
};

export default MainLayout;