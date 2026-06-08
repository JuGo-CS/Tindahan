import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import SearchBar from '../components/items/searchBar.jsx';
import ItemGrid from '../components/items/itemGrid';
import { itemService } from '../../backend/pages/itemServices/fetchingItems';

const ItemScreen = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStoreCatalog = async () => {
            const data = await itemService.getAllActiveItems();
            if (data) {
                setItems(data);
            }
            setLoading(false);
        };

        fetchStoreCatalog();
    }, []);

    const handleAddToCart = (selectedItem) => {
        console.log('Item click registration active for:', selectedItem.name);
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-slate-50">
                <ActivityIndicator size="large" color="#10b981" />
                <Text className="text-slate-400 mt-2 font-medium">
                    Opening Tindahan Catalog...
                </Text>
            </View>
        );
    }

    return (
        <View className="flex-1">
            <SearchBar />
            <ItemGrid items={items} onAddItem={handleAddToCart} />
        </View>
    );
};

export default ItemScreen;
