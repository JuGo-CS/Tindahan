import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { useState } from 'react';
import { GetItemDetails } from '../../../backend/pages/itemServices/itemDetails.js';
import ModalButtons from './modalButtons.jsx';

const ItemsModal = ({ item, setItem, setQuantity, onClose, addItemToCart }) => {
    const itemDeets = GetItemDetails(item);
    const [imageLoading, setImageLoading] = useState(false);
    const fullItemName = `${item.name} ${item.variant} (${item.weight})`;

    return (
        <View className="absolute top-0 right-0 left-0 bottom-0 z-50 bg-black/50">
            <View className="absolute top-7 right-10 left-10 bottom-20 bg-white rounded-xl">
                <TouchableOpacity
                    onPress={() => onClose()}
                    className="absolute h-9 w-9 rounded-full  bg-activeOrange z-50 flex justify-center items-center top-0 right-0 border border-white "
                >
                    <Text className="text-white font-black text-xl">X</Text>
                </TouchableOpacity>

                <View className="w-full aspect-square rounded-t-xl items-center justify-center relative overflow-hidden">
                    {imageLoading && (
                        <ActivityIndicator
                            className="absolute z-10"
                            size="large"
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

                {/* 🏷️ Card Descriptions Content */}
                <View className={`p-2 flex-col justify-start min-h-[60px]`}>
                    {/* Brand Name */}
                    <Text
                        className="text-3xl font-black text-textBlue tracking-tight leading-tight"
                        numberOfLines={2}
                    >
                        {fullItemName}
                    </Text>
                </View>

                {/* 💰 Price Layout Tag */}
                <View className="-mt-2 mb-2 mx-1 flex-row  items-end px-1">
                    <Text className="text-3xl font-black text-primaryGreen">
                        ₱{parseFloat(itemDeets.itemPrice.toString()).toFixed(0)}
                    </Text>
                    <Text className="text-3xl font-bold text-textSecondaryBlue ">
                        {' '}
                        / pc
                    </Text>
                </View>

                <ModalButtons
                    onClose={onClose}
                    item={item}
                    addItemToCart={addItemToCart}
                />
            </View>
        </View>
    );
};

export default ItemsModal;
