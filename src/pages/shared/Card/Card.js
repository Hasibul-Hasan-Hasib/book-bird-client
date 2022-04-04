import React from 'react';
import useData from '../../../hooks/useData'


const Card = () => {
    const books = useData();
    console.log(books)
    return (
        <>  
            {
                books?.map(book => <img src={book.Image}/>)
            }
        </>
    );
};

export default Card;