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
// import Total from '../../includes/total.jsx';
import QuantityCounter from '../../includes/quantityCounter.jsx';

const ItemsModal = ({ item, setItem, setQuantity, onClose, addItemToCart }) => {
    const itemDeets = GetItemDetails(item);
    const [imageLoading, setImageLoading] = useState(false);
    const fullItemName = `${item.name} ${item.variant} (${item.weight})`;

    const [productPrice, setProductPrice] = useState(itemDeets.itemPrice);
    const [totalQuantity, setTotalQuantity] = useState(1);

    return (
        <View className="absolute top-0 right-0 left-0 bottom-0 z-50 bg-black/50">
            <View className="absolute top-7 right-10 left-10 bottom-20 bg-white rounded-xl">
                {/* This part is for the X button on the top right (exiting the modal when adding an item to the cart) */}
                <TouchableOpacity
                    onPress={() => onClose()}
                    className="absolute h-9 w-9 rounded-full  bg-activeOrange z-50 flex justify-center items-center top-0 right-0 border border-white "
                >
                    <Text className="text-white font-black text-xl">X</Text>
                </TouchableOpacity>

                {/* the photo on the modal */}
                <View className="w-full h-72 rounded-t-xl items-center justify-center relative overflow-hidden">
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
                <View
                    className={`p-2 flex-col justify-center min-h-[60px] bg-grayColor`}
                >
                    {/* Brand Name */}
                    <Text
                        className="text-3xl font-black text-textBlue tracking-tight leading-tight"
                        numberOfLines={2}
                    >
                        {fullItemName}
                    </Text>
                </View>

                {/* 💰 Price Layout Tag */}
                <View className="mb-2 mx-1 flex-row justify-between items-end px-1">
                    <Text className="text-2xl font-bold text-textSecondaryBlue ">
                        Pc /{' '}
                    </Text>
                    <Text className="text-3xl font-black text-primaryGreen">
                        ₱{parseFloat(itemDeets.itemPrice.toString()).toFixed(0)}
                    </Text>
                </View>

                {/* Quantity */}
                <View className="text-2xl flex-row justify-between mx-2">
                    <Text className="text-2xl font-bold text-textSecondaryBlue">
                        Quantity :
                    </Text>
                    <Text className="text-2xl font-black">
                        x {totalQuantity}
                    </Text>
                </View>

                {/* horizontal lign */}
                <View className="w-full h-0 border-t-4 border-dashed border-gray-500 my-4 mx-2" />

                {/* total based on the quantity and product price */}
                <View className="flex-row justify-between items-center mx-2">
                    <Text className="text-textBlue text-2xl font-medium">
                        Total:
                    </Text>
                    <Text className="text-textBlue text-4xl font-black">
                        ₱{productPrice * totalQuantity}
                    </Text>
                </View>

                <View className="absolute left-0 right-0 bottom-3 gap-2">
                    <QuantityCounter
                        totalQuantity={totalQuantity}
                        setTotalQuantity={setTotalQuantity}
                    />
                    <ModalButtons
                        onClose={onClose}
                        item={item}
                        addItemToCart={addItemToCart}
                    />
                </View>
            </View>
        </View>
    );
};

export default ItemsModal;
