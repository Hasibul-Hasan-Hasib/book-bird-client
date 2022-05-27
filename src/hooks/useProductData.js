import { useEffect, useState } from "react"
import axios from 'axios'


const useProductData = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const url = `${process.env.REACT_APP_URL}products`;
    const fetchData = async () => {
        await axios.get(url)
            .then(res => {
                setBooks(res.data);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, [])

    return { books, isLoading };
}

export default useProductData;