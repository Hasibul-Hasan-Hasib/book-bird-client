import React from 'react';
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
    const suggestedBooks = books.filter(item => item.Category1 === book?.Category1 || item.Category2 === book?.Category2)

    return (
        <>
            <TopSearch />
            <Details key={book ? book.Sku : ""} book={book ? book : []} />
            <Suggestion books={suggestedBooks?suggestedBooks:[]} />
            <Footer />
        </>
    );
};

export default BookDetails;