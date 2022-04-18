import React from 'react';
import styles from './BookDetails.module.css'
import TopSearch from '../../shared/TopSearch/TopSearch';
import Footer from '../../shared/Footer/Footer';
import Details from '../Details/Details';
import Suggestion from '../Suggestion/Suggestion';


const BookDetails = () => {


    return (
        <>
            <TopSearch />
                <Details/>
                <Suggestion/>
            <Footer />
        </>
    );
};

export default BookDetails;