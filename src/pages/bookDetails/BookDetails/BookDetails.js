import React from 'react';
import styles from './BookDetails.module.css';
import NavigationBar from '../../shared/NavigationBar/NavigationBar'
import TopSearch from '../../shared/TopSearch/TopSearch';
import Footer from '../../shared/Footer/Footer';
import Details from '../Details/Details';
import Suggestion from '../Suggestion/Suggestion';
import useProductData from '../../../hooks/useProductData';
import { useParams } from 'react-router-dom'



const BookDetails = () => {

    const { books } = useProductData();
    const { id } = useParams();

    const book = books.find(item => item.Sku === id)


    return (
        <>
            <NavigationBar />
            <TopSearch />
            <Details key={book ? book.Sku : ""} book={book ? book : []} />
            <Suggestion books={books} />
            <Footer />
        </>
    );
};

export default BookDetails;