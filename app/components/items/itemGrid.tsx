import React from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import ItemProductCard, { ItemData } from './itemProductCard';

interface ItemGridProps {
    items: ItemData[];
    onAddItem: (item: ItemData) => void;
}

const ItemGrid: React.FC<ItemGridProps> = ({ items, onAddItem }) => {
    const { width } = useWindowDimensions();
    const numColumns = width < 400 ? 2 : width < 768 ? 3 : 4;

    return (
        <FlatList
            data={items}
            key={numColumns}
            keyExtractor={(item) => item.item_id.toString()}
            numColumns={numColumns}
            contentContainerStyle={{ paddingHorizontal: 6, paddingBottom: 120 }}
            renderItem={({ item }) => (
                <ItemProductCard item={item} onAddPress={onAddItem} />
            )}
        />
    );
};

export default ItemGrid;
