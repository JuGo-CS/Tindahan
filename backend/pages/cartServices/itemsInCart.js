import { useState, useContext, createContext } from 'react';

const ItemContext = createContext();

export const ItemsCart = ({ children }) => {
    const [itemLists, setItemLists] = useState([]);

    const addItemToCart = (newItem, quantity) => {
        setItemLists((oldItemLists) => [...oldItemLists, [newItem, quantity]]);
    };

    const getItemLists = () => {
        return itemLists;
    };

    const totalItemCounter = () => {
        return itemLists.length;
    };

    return (
        <ItemContext.Provider
            value={{ addItemToCart, getItemLists, totalItemCounter }}
        >
            {children}
        </ItemContext.Provider>
    );
};

export const useItemContext = () => {
    const itemContext = useContext(ItemContext);

    return itemContext;
};
