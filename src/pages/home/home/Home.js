import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import TopSearchBar from '../../shared/topSearchBar/TopSearchBar';
import CategoryBar from '../../shared/categoryBar/CategoryBar';
import BestSelling from '../BestSellingFiction/BestSellingFiction';
import Banner from '../Banner/Banner';
import HomeBrowse from '../HomeBrowse/HomeBrowse';
import HomeHero from '../HomeHero/HomeHero';


const Home = () => {

    const browseFictionTitle = "Browse Fiction Books";
    const fictionData = [
        {
            "categoryName": "Fantasy",
            "bookImg": "https://productimages.worldofbooks.com/1841490563.jpg"
        },
        {
            "categoryName": "Modern Fiction",
            "bookImg": "https://productimages.worldofbooks.com/0340768495.jpg"
        },
        {
            "categoryName": "Romance",
            "bookImg": "https://productimages.worldofbooks.com/0749308028.jpg"
        },
        {
            "categoryName": "Thriller and Suspense",
            "bookImg": "https://productimages.worldofbooks.com/0747255393.jpg"
        },
        {
            "categoryName": "Adventure",
            "bookImg": "https://productimages.worldofbooks.com/0002256304.jpg"
        },
        {
            "categoryName": "Classic Fiction",
            "bookImg": "https://productimages.worldofbooks.com/1840224053.jpg"
        },
    ];


    return (
        <>
            <NavigationBar />
            <TopSearchBar />
            <CategoryBar />
            <Banner />
            <BestSelling />
            <HomeBrowse title={browseFictionTitle} data={fictionData}/>
            <HomeHero />
        </>
    );
};

export default Home;