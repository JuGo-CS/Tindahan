import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { itemService } from '../../backend/pages/itemServices/fetchingItems';
import ItemGrid from '../components/items/itemGrid';
import SearchBar from '../components/items/searchBar.jsx';
import Toast from '../includes/toast.jsx';

const ItemScreen = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const [toastMessage, setToastMessage] = useState('');
    const [toastVisible, setToastVisible] = useState(false);

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

    const triggerToast = (message) => {
        setToastMessage(message);
        setToastVisible(true);
    };

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
                    Opening Tindahan...
                </Text>
            </View>
        );
    }

    return (
        <View className="flex-1">
            <Toast
                message={toastMessage}
                visible={toastVisible}
                onHide={() => setToastVisible(false)}
            />

            {/* <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
                onClearSearch={() => triggerToast('Search box are cleared!')}
            /> */}

            {filteredItems.length === 0 ? (
                <View className="flex-1 justify-center items-center px-8 pb-32">
                    <Text className="text-textBlue text-3xl font-bold text-center mb-1">
                        Walang yan sa listahan.
                    </Text>
                    <Text className="text-textSecondaryBlue text-lg text-center">
                        Paki tignan ang spelling o di kaya hindi pa ito
                        naidagdag sa database.
                    </Text>
                </View>
            ) : (
                <ItemGrid items={filteredItems} onAddItem={handleAddToCart} />
            )}
        </View>
    );
};

export default ItemScreen;
