import { useEffect, useState } from "react"


const useData = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://book-birds.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setIsLoading(false);
            })
    }, [])
    return { books, isLoading };
}





export default useData;