import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { ToastContainer, toast } from 'react-toastify';
export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = '₹'
    const delivery_fee = 40
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    

    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Please select a size');
            return;
        }
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);
    }

    const getCartCount = () => {
    let count = 0;

    for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
            if (cartItems[itemId][size] > 0) {
                count += cartItems[itemId][size];
            }
        }
    }

    return count;
}

const updateCartItem = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }
}

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, setCartItems,
        addToCart, getCartCount, updateCartItem
    }

    

    return (
            <ShopContext.Provider value={value}>
                {
                    props.children
                }
            </ShopContext.Provider>
            )
}

export default ShopContextProvider