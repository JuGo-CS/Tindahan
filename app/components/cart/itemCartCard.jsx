import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { GetItemDetails } from '../../../backend/pages/itemServices/itemDetails.js';
import { useItemContext } from '../../../backend/pages/cartServices/itemsInCart.js';

const ItemCartCard = ({ item, quantity }) => {
    const itemDeets = GetItemDetails(item);
    const [imageLoading, setImageLoading] = useState(false);
    const { updateItemQuantity } = useItemContext();

    return (
        <View className="flex-row bg-white rounded-xl shadow-md m-1.5 p-3 items-center">
            {/* 🖼️ Product Image */}
            <View className="w-[72px] h-[72px] rounded-xl overflow-hidden bg-gray-100">
                {imageLoading && (
                    <ActivityIndicator
                        className="absolute z-10"
                        size="small"
                        color="#10b981"
                    />
                )}
                <Image
                    source={{ uri: itemDeets.imageUrl }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    onLoadStart={() => setImageLoading(true)}
                    onLoadEnd={() => setImageLoading(false)}
                />
            </View>

            {/* 📝 Item Details */}
            <View className="flex-1 ml-3">
                <Text
                    className="text-lg font-black text-textBlue tracking-tight"
                    numberOfLines={1}
                >
                    {item.name}
                </Text>
                <Text className="text-sm font-bold text-textSecondaryBlue">
                    {item.variant}
                </Text>
                <Text className="text-lg font-black text-primaryGreen mt-1">
                    ₱{parseFloat(itemDeets.itemPrice.toString()).toFixed(0)}
                </Text>
            </View>

            {/* ➖ / 🔢 / ➕ Quantity Controls */}
            <View className="flex-row items-center gap-2 ml-2">
                <TouchableOpacity
                    onPress={() => updateItemQuantity(item.item_id, quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 items-center justify-center"
                    activeOpacity={0.7}
                >
                    <Text className="text-xl font-bold text-gray-600 mt-[-2px]">
                        −
                    </Text>
                </TouchableOpacity>

                <Text className="text-lg font-black text-textBlue w-7 text-center">
                    {quantity}
                </Text>

                <TouchableOpacity
                    onPress={() => updateItemQuantity(item.item_id, quantity + 1)}
                    className="w-8 h-8 rounded-full bg-primaryGreen items-center justify-center"
                    activeOpacity={0.7}
                >
                    <Text className="text-xl font-bold text-white mt-[-2px]">
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ItemCartCard;
