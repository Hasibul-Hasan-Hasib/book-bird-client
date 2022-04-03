import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import TopSearchBar from '../../shared/topSearchBar/TopSearchBar';
import CategoryBar from '../../shared/categoryBar/CategoryBar';
import Banner from '../banner/Banner';


const Home = () => {
    return (
        <>
            <NavigationBar />
            <TopSearchBar />
            <CategoryBar />
            <Banner />
        </>
    );
};

export default Home;