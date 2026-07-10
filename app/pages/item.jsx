import { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useItemContext } from '../../backend/services/cartServices/itemsInCart.js';
import { useItemData } from '../contexts/itemDataContext.jsx';
import ItemGrid from '../components/items/itemGrid';
import ItemsModal from '../components/items/itemsModal.jsx';
import SearchBar from '../components/items/searchBar.jsx';
import Toast from '../components/ui/toast.jsx';

const ItemScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const [toastMessage, setToastMessage] = useState('');
    const [toastVisible, setToastVisible] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const { addItemToCart } = useItemContext();
    const { items, loading } = useItemData();

    const triggerToast = (message) => {
        setToastMessage(message);
        setToastVisible(true);
    };

    const handleItemModal = (selectedItem) => {
        setSelectedItem(selectedItem);
        setModalVisible(true);
    };

    const filteredItems = items.filter((item) => {
        // Safe check: make sure the item has a name before trying to change case
        const itemName = item.name ? item.name.toLowerCase() : '';
        const variantName = item.variant ? item.variant.toLowerCase() : '';
        const searchString = searchQuery.toLowerCase();

        const searchedItem =
            itemName.includes(searchString) ||
            variantName.includes(searchString);

        return searchedItem;
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

            <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
                onClearSearch={() => triggerToast('Search box are cleared!')}
            />

            {modalVisible && (
                <ItemsModal
                    item={selectedItem}
                    setItem={setSelectedItem}
                    setQuantity={setQuantity}
                    onClose={() => setModalVisible(false)}
                    addItemToCart={addItemToCart}
                />
            )}

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
                <ItemGrid
                    items={filteredItems}
                    onHandleModal={handleItemModal}
                />
            )}
        </View>
    );
};

export default ItemScreen;
