import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import TopSearchBar from '../../shared/topSearchBar/TopSearchBar';
import CategoryBar from '../../shared/categoryBar/CategoryBar';
import BestSelling from '../BestSellingFiction/BestSellingFiction';
import Card from '../../shared/Card/Card'
import Banner from '../banner/Banner';


const Home = () => {
    return (
        <>
            <NavigationBar />
            <TopSearchBar />
            <CategoryBar />
            <Banner />
            <BestSelling />
            <Card />
        </>
    );
};

export default Home;