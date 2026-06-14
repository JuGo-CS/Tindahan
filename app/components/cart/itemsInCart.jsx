import { useState, useContext, createContext } from "react";

const ItemContext = createContext();

export const ItemsCart = ({ children }) => {
    const [itemLists, setItemLists] = useState([]);

    const addItemToCart = (newItem) => {
        setItemLists((oldItemLists) => [...oldItemLists, newItem]);
    }

    const getItemLists = () => {
        return itemLists;
    }

    return ( 
        <ItemContext.Provider value={{ addItemToCart, getItemLists}} >
            {children}
        </ItemContext.Provider>
    );
}

export const useItemContext = () => {
    const itemContext = useContext(ItemContext);

    return itemContext;
}
 
