import React from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import ItemProductCard from './itemProductCard';

const ItemGrid = ({ items, onAddItem }) => {
    const { width } = useWindowDimensions();

    const numColumns = width < 400 ? 2 : width < 768 ? 3 : 4;

    return (
        <FlatList
            data={items}
            key={numColumns} // Forces the grid to reset layout columns cleanly if screen orientation shifts
            keyExtractor={(item) => item.item_id.toString()}
            numColumns={numColumns}
            contentContainerStyle={{ paddingHorizontal: 9, paddingBottom: 120 }}
            renderItem={({ item }) => (
                <ItemProductCard item={item} onAddPress={onAddItem} />
            )}
        />
    );
};

export default ItemGrid;
