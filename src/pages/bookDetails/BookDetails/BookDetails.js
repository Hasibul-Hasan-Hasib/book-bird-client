import React from 'react';
import styles from './BookDetails.module.css'
import TopSearch from '../../shared/TopSearch/TopSearch';
import Footer from '../../shared/Footer/Footer';
import Details from '../Details/Details';
import Suggestion from '../Suggestion/Suggestion';
import useData from '../../../hooks/useData';



const BookDetails = () => {

    const books = useData();


    return (
        <>
            <TopSearch />
                <Details/>
                <Suggestion books={books}/>
            <Footer />
        </>
    );
};

export default BookDetails;