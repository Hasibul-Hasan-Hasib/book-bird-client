import React from 'react';
import styles from './BookDetails.module.css';
import NavigationBar from '../../shared/NavigationBar/NavigationBar'
import TopSearch from '../../shared/TopSearch/TopSearch';
import Footer from '../../shared/Footer/Footer';
import Details from '../Details/Details';
import Suggestion from '../Suggestion/Suggestion';
import useData from '../../../hooks/useData';
import { useParams } from 'react-router-dom'



const BookDetails = () => {

    const books = useData();
    console.log(books);
    const { id } = useParams();

    const book = books.find(item => item.Sku === id)
    console.log(book);


    return (
        <>
            <NavigationBar />
            <TopSearch />
            <Details book={book ? book : "nothing"} />
            <Suggestion books={books} />
            <Footer />
        </>
    );
};

export default BookDetails;