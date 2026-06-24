import { useState, useContext, createContext } from 'react';

const ItemContext = createContext();

export const ItemsCart = ({ children }) => {
    const [itemLists, setItemLists] = useState([]);

    const addItemToCart = (item, quantity = 1) => {
        setItemLists((oldItemLists) => {
            const existingIndex = oldItemLists.findIndex(
                (cartItem) => cartItem.item.item_id === item.item_id,
            );

            if (existingIndex >= 0) {
                // If item already in cart, increase quantity
                const updatedList = [...oldItemLists];
                updatedList[existingIndex] = {
                    ...updatedList[existingIndex],
                    quantity: updatedList[existingIndex].quantity + quantity,
                };
                return updatedList;
            } else {
                // Add new item
                return [...oldItemLists, { item, quantity }];
            }
        });
    };

    const updateItemQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            return removeItem(itemId);
        }
        setItemLists((oldItemLists) =>
            oldItemLists.map((cartItem) =>
                cartItem.item.item_id === itemId
                    ? { ...cartItem, quantity: newQuantity }
                    : cartItem,
            ),
        );
    };

    const removeItem = (itemId) => {
        setItemLists((oldItemLists) =>
            oldItemLists.filter(
                (cartItem) => cartItem.item.item_id !== itemId,
            ),
        );
    };

    const getItemLists = () => itemLists;

    const totalItemCounter = () => itemLists.length;

    const clearCart = () => setItemLists([]);

    return (
        <ItemContext.Provider
            value={{
                addItemToCart,
                getItemLists,
                totalItemCounter,
                updateItemQuantity,
                removeItem,
                clearCart,
            }}
        >
            {children}
        </ItemContext.Provider>
    );
};

export const useItemContext = () => {
    const itemContext = useContext(ItemContext);

    return itemContext;
};
