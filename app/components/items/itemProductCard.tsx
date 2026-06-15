import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ItemProductCard = ({ item, onAddPress }) => {
    const CLOUDINARY_BASE_URL =
        'https://res.cloudinary.com/djssijeqe/image/upload/q_auto,f_auto/';

    // Safe Cloudinary image builder fallback if item_picture string is completely empty
    const fullImageUrl = item.item_picture
        ? `${CLOUDINARY_BASE_URL}${item.item_picture}`
        : `${CLOUDINARY_BASE_URL}v1781356002/image_holder.webp`;

    // Grab individual retail price safely
    const pcUnit = item.item_units?.find((u) => u.unit_type === 'pc');
    const pcPrice = pcUnit ? pcUnit.type_price : 0;
    const hasContent = item.name || item.variant || item.weight;

    return (
        <View className="flex-1 m-1.5 bg-white rounded-xl shadow-md flex-col justify-between min-h-[290px]">
            <View className="w-full aspect-square rounded-t-xl items-center justify-center relative overflow-hidden">
                <Image
                    source={{ uri: fullImageUrl }}
                    style={{ width: '100%', height: '100%' }} 
                    resizeMode="cover"
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
                className={`p-2 flex-col flex-1 justify-start ${hasContent ? 'min-h-[60px]' : 'h-12'}`}
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
                <Text className="text-2xl font-black text-primaryGreen">
                    ₱{parseFloat(pcPrice.toString()).toFixed(0)}
                </Text>
                <Text className="text-sm font-bold text-textSecondaryBlue ">
                    / pc
                </Text>
            </View>
        </View>
    );
};

export default ItemProductCard;