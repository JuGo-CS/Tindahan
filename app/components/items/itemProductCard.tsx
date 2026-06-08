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
    const pcUnit = item.item_units?.find(
        (u) => u.unit_type === 'each' || u.unit_type === 'pc',
    );
    const pcPrice = pcUnit ? pcUnit.type_price : 0;

    return (
        <View className="flex-1 m-1.5 bg-white p-3.5 rounded-3xl shadow-sm border border-slate-100/60 flex-col justify-between">
            {/* 📸 Image Area: Box layout with fixed dimensions to guarantee phone display */}
            <View className="w-full aspect-square bg-slate-50 rounded-2xl items-center justify-center p-2 mb-2 relative overflow-hidden">
                <Image
                    source={{ uri: fullImageUrl }}
                    style={{ width: '100%', height: '100%' }} // Strict mobile style constraints
                    resizeMode="contain" // 🔥 Prevents the stretch entirely!
                />

                {/* ➕ Floating Action Add Button */}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => onAddPress?.(item)}
                    className="absolute bottom-2 right-2 bg-emerald-500 w-9 h-9 rounded-full items-center justify-center shadow-sm z-10"
                >
                    <Text className="text-white text-xl font-bold mt-[-2px]">
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            {/* 🏷️ Card Descriptions Content */}
            <View className="px-1 flex-col">
                {/* Brand Name: Big, Dark, Extremely Bold */}
                <Text
                    className="text-base font-black text-slate-900 tracking-tight"
                    numberOfLines={1}
                >
                    {item.name}
                </Text>

                {/* Variety: Smaller but still clearly bold/medium */}
                <Text
                    className="text-xs font-semibold text-slate-500 mt-0.5"
                    numberOfLines={1}
                >
                    {item.variant}
                </Text>

                {/* Size/Weight Label */}
                <Text className="text-[10px] font-bold text-slate-400 mt-0.5">
                    {item.weight}
                </Text>
            </View>

            {/* 💰 Price Layout Tag */}
            <View className="mt-3 pt-2 border-t border-slate-50 flex-row justify-between items-end px-1">
                <Text className="text-xl font-black text-emerald-600">
                    ₱{parseFloat(pcPrice.toString()).toFixed(0)}
                </Text>
                <Text className="text-[11px] font-bold text-slate-400 mb-0.5">
                    / pc
                </Text>
            </View>
        </View>
    );
};

export default ItemProductCard;
