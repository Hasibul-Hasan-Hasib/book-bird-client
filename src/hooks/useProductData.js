import {useEffect, useState} from "react"


const useData = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://book-birds.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    return books;
}





export default useData;