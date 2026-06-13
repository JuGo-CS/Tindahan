import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export interface ItemUnit {
    unit_type: string;
    type_price: number;
}

export interface ItemData {
    item_id: number;
    name: string;
    variant: string;
    weight: string;
    item_picture: string;
    item_units?: ItemUnit[];
}

interface ItemProductCardProps {
    item: ItemData;
    onAddPress?: (item: ItemData) => void;
}

const ItemProductCard: React.FC<ItemProductCardProps> = ({
    item,
    onAddPress,
}) => {
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
        <View className="flex-1 m-1.5 bg-white rounded-xl shadow-md flex-col justify-between min-h-[290px] sm:min-h-[320px]">
            <View className="w-full aspect-square  rounded-t-xl items-center justify-center relative overflow-hidden">
                <Image
                    source={{ uri: fullImageUrl }}
                    style={{ width: '100%', height: '100%' }} // Strict mobile style constraints
                    resizeMode="cover"
                />

                {/* ➕ Floating Action Add Button */}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => onAddPress?.(item)}
                    className="absolute bottom-2 right-2 bg-primaryGreen w-14 h-14 sm:w-17 sm:h-17 md:w-19 md:h-19 rounded-full items-center justify-center shadow-sm z-10"
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
                {/* Brand Name: Big, Dark, Extremely Bold */}
                <Text
                    className="text-2xl sm:text-4xl font-black text-textBlue tracking-tight leading-tight"
                    numberOfLines={1}
                >
                    {item.name}
                </Text>

                {/* Variety: Smaller but still clearly bold/medium */}
                <Text
                    className="text-base sm:text-lg  font-bold text-textBlue mt-0.5 leading-none"
                    // numberOfLines={1}
                >
                    {item.variant}
                </Text>

                {/* Size/Weight Label */}
                <Text className="text-sm sm:text-base font-semibold text-textSecondaryBlue">
                    {item.weight}
                </Text>
            </View>

            {/* 💰 Price Layout Tag */}
            <View className="mt-3 mb-2 mx-1 pt-2 flex-row justify-between items-end px-1">
                <Text className="text-2xl sm:text-4xl font-black text-primaryGreen">
                    ₱{parseFloat(pcPrice.toString()).toFixed(0)}
                </Text>
                <Text className="text-sm sm:text-base font-bold text-textSecondaryBlue ">
                    / pc
                </Text>
            </View>
        </View>
    );
};

export default ItemProductCard;
