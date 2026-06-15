import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { GetItemDetails } from '../../../backend/pages/itemServices/itemDetails.js';

const ItemsModal = ({ item, setItem, setQuantity, onClose }) => {
    const itemDeets = GetItemDetails(item);
    const [imageLoading, setImageLoading] = useState(false);

    return (
        <View className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center z-50 bg-black/50">
            <View className="absolute flex justify-center items-center top-12 right-10 left-10 bottom-40 bg-white rounded-xl">

                <TouchableOpacity
                    onPress={() => onClose()}
                    className="absolute h-16 w-16 rounded-full  bg-primaryGreen z-50 flex justify-center items-center top-0 right-0 border border-white "
                >
                    <Text className="text-white font-black text-2xl">
                        X
                    </Text>
                    
                </TouchableOpacity>

                <View className="w-full aspect-square rounded-t-xl items-center justify-center relative overflow-hidden">

                    {imageLoading && (
                        <ActivityIndicator className="absolute z-10" size="large" color="#10b981" />
                    )}

                    <Image
                        source={{ uri: itemDeets.imageUrl }}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="cover"
                        onLoadStart={() => setImageLoading(true)}
                        onLoadEnd={() => setImageLoading(false)}
                    />
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
        </View>
    );
};

export default ItemsModal;


