import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import SearchBar from '../components/items/searchBar.jsx';
import ItemGrid from '../components/items/itemGrid';
import { itemService } from '../../backend/pages/itemServices/fetchingItems';

const ItemScreen = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

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

    const filteredItems = items.filter((item) => {
        // Safe check: make sure the item has a name before trying to change case
        const itemName = item.name ? item.name.toLowerCase() : '';
        const searchString = searchQuery.toLowerCase();
        
        return itemName.includes(searchString);
    });

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#10b981" />
                <Text className="text-textSecondaryBlue mt-2 font-medium">
                    Opening Tindahan Catalog...
                </Text>
            </View>
        );
    }

    return (
        <View className="flex-1">
            <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
            <ItemGrid items={filteredItems} onAddItem={handleAddToCart} />
        </View>
    );
};

export default ItemScreen;
