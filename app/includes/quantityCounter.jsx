import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuantityCounter = ({ totalQuantity, setTotalQuantity }) => {

    const decreaseCount = () => {
        if (totalQuantity - 1 >= 1) {
            setTotalQuantity((oldValue) => oldValue - 1);
        }
    };

    return (
        <View className="flex-1 flex-col px-2 justify-between top-0 bottom-16">
            <View className="text-2xl flex-row justify-between">
                <Text className="text-2xl font-bold text-textSecondaryBlue">
                    Quantity :
                </Text>
                <Text className="text-2xl font-black">x {totalQuantity}</Text>
            </View>

            <View className="flex-row justify-between bottom-20">
                {/* for the + sign */}
                <TouchableOpacity
                    className="flex-1 items-center justify-center h-16 border border-gray-400 rounded-lg"
                    onPress={() => decreaseCount()}
                >
                    <Text className="font-black text-5xl">-</Text>
                </TouchableOpacity>

                {/* for the - sign */}
                <TouchableOpacity
                    className="flex-1 items-center justify-center h-16 border border-gray-400 rounded-lg ml-2"
                    onPress={() => setTotalQuantity((oldValue) => oldValue + 1)}
                >
                    <Text className="font-black text-3xl">+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QuantityCounter;
