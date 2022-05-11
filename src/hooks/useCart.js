import { useEffect, useState } from "react"
import axios from 'axios'


const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const url = 'http://localhost:3100/cart';
    const fetchData = async () => {
        await axios.get(url)
            .then(res => {
                setCartItems(res.data);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])


    return { cartItems };
}

export default useCart;