import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { GetItemDetails } from '../../../backend/pages/itemServices/itemDetails.js';

const ItemProductCard = ({ item, onAddPress }) => {
    const itemDeets = GetItemDetails(item);
    const [imageLoading, setImageLoading] = useState(false);

    return (
        <View className="flex-1 m-1.5 bg-white rounded-xl shadow-md flex-col justify-betweepcUnit min-h-[290px]">
            <View className="w-full aspect-square rounded-t-xl items-center justify-center relative overflow-hidden">

                {imageLoading && 
                    <ActivityIndicator 
                        className="absolute z-10" size="large" color="#10b981"
                    />
                }

                <Image
                    source={{ uri: itemDeets.imageUrl }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    onLoadStart={() => setImageLoading(true)}
                    onLoadEnd={() => setImageLoading(false)}
                />

                {/* ➕ Floating Action Add Button */}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => onAddPress?.(item)}
                    className="absolute bottom-2 right-2 bg-primaryGreen w-14 h-14 rounded-full items-center justify-center shadow-sm z-10"
                >
                    <Text className="text-white text-3xl font-bold mt-[-2px]">
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* 🏷️ Card Descriptions Content */}
            <View
                className={`p-2 flex-col flex-1 justify-start ${itemDeets.hasContent ? 'min-h-[60px]' : 'h-12'}`}
            >
                {/* Brand Name */}
                <Text
                    className="text-2xl font-black text-textBlue tracking-tight leading-tight"
                    numberOfLines={1}
                >
                    {item.name}
                </Text>

                {/* Variety */}
                <Text className="text-base font-bold text-textBlue mt-0.5 leading-none">
                    {item.variant}
                </Text>

                {/* Size/Weight Label */}
                <Text className="text-sm font-semibold text-textSecondaryBlue">
                    {item.weight}
                </Text>
            </View>

            {/* 💰 Price Layout Tag */}
            <View className="mt-3 mb-2 mx-1 pt-2 flex-row justify-between items-end px-1">
                <Text className="text-3xl font-black text-primaryGreen">
                    ₱{parseFloat(itemDeets.itemPrice.toString()).toFixed(0)}
                </Text>
                <Text className="text-sm font-bold text-textSecondaryBlue ">
                    / pc
                </Text>
            </View>
        </View>
    );
};

export default ItemProductCard;
