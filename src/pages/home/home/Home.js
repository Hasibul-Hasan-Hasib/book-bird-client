import React from 'react';
import NavigationBar from '../../shared/navigationBar/NavigationBar';
import TopSearchBar from '../../shared/topSearchBar/TopSearchBar';
import CategoryBar from '../../shared/categoryBar/CategoryBar';
import BestSelling from '../BestSelling/BestSelling';
import Banner from '../Banner/Banner';
import HomeBrowse from '../HomeBrowse/HomeBrowse';
import HomeHero from '../HomeHero/HomeHero';
import useData from '../../../hooks/useData';
import Blogs from '../Blogs/Blogs';


const Home = () => {

    const books = useData();

    
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

    const fiction = "Fiction"
    const nonFiction = "Non-Fiction"
    const bookBird = "Book-Bird"
    const children = "Children's"

    return (
        <>
            <NavigationBar />
            <TopSearchBar />
            <CategoryBar />
            <Banner />
            <BestSelling title={fiction} books={books}/>
            <HomeBrowse title={fiction} data={fictionData}/>
            <HomeHero />
            <HomeBrowse title={bookBird} data={fictionData}/>
            <BestSelling title={nonFiction} books={books}/>
            <HomeBrowse title={nonFiction} data={fictionData}/>
            <BestSelling title={children} books={books}/>
            <HomeBrowse title={children} data={fictionData}/>
            <Blogs/>
        </>
    );
};

export default Home;