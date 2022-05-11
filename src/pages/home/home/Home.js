import React, { useState } from 'react';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import BestSelling from '../BestSelling/BestSelling';
import Banner from '../Banner/Banner';
import HomeBrowse from '../HomeBrowse/HomeBrowse';
import HomeHero from '../HomeHero/HomeHero';
import Blogs from '../Blogs/Blogs';
import Footer from '../../shared/Footer/Footer'
import Testimonial from '../Testimonial/Testimonial';
import TopSearch from '../../shared/TopSearch/TopSearch';
import useProductData from '../../../hooks/useProductData';


const Home = () => {

    const { books, isLoading } = useProductData();
    const [cartItem,setCartItem] = useState([]);


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
            <head>
                <title>This is home</title>
            </head>
            <body>
                <NavigationBar />
                <TopSearch />
                <Banner />
                <BestSelling title={fiction} books={books} isLoading={isLoading} />
                <HomeBrowse title={fiction} data={fictionData} />
                <HomeHero />
                <HomeBrowse title={bookBird} data={fictionData} />
                <BestSelling title={nonFiction} books={books} isLoading={isLoading} />
                <HomeBrowse title={nonFiction} data={fictionData} />
                <Blogs />
                <BestSelling title={children} books={books} isLoading={isLoading} />
                <HomeBrowse title={children} data={fictionData} />
                <Testimonial />
                <Footer />
            </body>
        </>
    );
};

export default Home;