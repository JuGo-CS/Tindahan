import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuantityCounter = ({ totalQuantity, setTotalQuantity }) => {
    const decreaseCount = () => {
        if (totalQuantity - 1 >= 1) {
            setTotalQuantity((oldValue) => oldValue - 1);
        }
    };

    return (
        <View className="px-2 justify-between bottom-0">
            <View className="flex-row justify-between">
                {/* for the + sign */}
                <TouchableOpacity
                    className="flex-1 items-center justify-center h-16 border border-gray-400 bg-grayEnabled rounded-lg"
                    onPress={() => decreaseCount()}
                >
                    <Text className="font-extrabold text-white text-5xl">
                        -
                    </Text>
                </TouchableOpacity>

                {/* for the - sign */}
                <TouchableOpacity
                    className="flex-1 items-center justify-center h-16 border border-gray-400 bg-grayEnabled rounded-lg ml-2"
                    onPress={() => setTotalQuantity((oldValue) => oldValue + 1)}
                >
                    <Text className="font-extrabold text-white text-3xl">
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QuantityCounter;
