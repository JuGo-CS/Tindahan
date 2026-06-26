import { FlatList, Text, View } from 'react-native';
import ItemCartCard from './itemCartCard';

const ItemCartGrid = ({ items }) => {
    if (items.length === 0) {
        return (
            <View className="flex-1 justify-center items-center px-8 pb-32">
                <Text className="text-textBlue text-3xl font-bold text-center mb-1">
                    Your cart is empty.
                </Text>
                <Text className="text-textSecondaryBlue text-lg text-center">
                    Add some items from the store!
                </Text>
            </View>
        );
    }

    return (
        <FlatList
            data={items}
            keyExtractor={(cartItem) => cartItem.item.item_id.toString()}
            numColumns={1}
            contentContainerStyle={{
                paddingHorizontal: 9,
                paddingBottom: 120,
                paddingTop: 16,
            }}
            ListHeaderComponent={
                <Text className="font-semibold text-3xl text-slate-500 mb-2 px-1">
                    Shopping Cart
                </Text>
            }
            renderItem={({ item }) => (
                <ItemCartCard item={item.item} quantity={item.quantity} />
            )}
        />
    );
};

export default ItemCartGrid;
