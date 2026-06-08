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
        : 'https://via.placeholder.com/150';

    // Grab individual retail price safely
    const pcUnit = item.item_units?.find((u) => u.unit_type === 'pc');
    const pcPrice = pcUnit ? pcUnit.type_price : 0;

    return (
        <View className="flex-1 m-1.5 bg-white rounded-xl shadow-md border border-slate-100/60 flex-col justify-between">
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
                    className="absolute bottom-2 right-2 bg-emerald-500 w-14 h-14 sm:w-17 sm:h-17 md:w-19 md:h-19 rounded-full items-center justify-center shadow-sm z-10"
                >
                    <Text className="text-white text-3xl font-bold mt-[-2px]">
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* 🏷️ Card Descriptions Content */}
            <View className="p-2 flex-col ">
                {/* Brand Name: Big, Dark, Extremely Bold */}
                <Text
                    className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight"
                    numberOfLines={1}
                >
                    {item.name}
                </Text>

                {/* Variety: Smaller but still clearly bold/medium */}
                <Text
                    className="text-base sm:text-lg  font-bold text-slate-900 mt-0.5 leading-none"
                    // numberOfLines={1}
                >
                    {item.variant}
                </Text>

                {/* Size/Weight Label */}
                <Text className="text-sm sm:text-base font-semibold text-slate-500">
                    {item.weight}
                </Text>
            </View>

            {/* 💰 Price Layout Tag */}
            <View className="mt-3 mb-2 mx-1 pt-2 border-t border-slate-50 flex-row justify-between items-end px-1">
                <Text className="text-2xl sm:text-4xl font-black text-emerald-600">
                    ₱{parseFloat(pcPrice.toString()).toFixed(0)}
                </Text>
                <Text className="text-sm sm:text-base font-bold text-slate-400 ">
                    / pc
                </Text>
            </View>
        </View>
    );
};

export default ItemProductCard;
