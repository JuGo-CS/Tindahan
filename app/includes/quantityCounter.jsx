import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuantityCounter = () => {
    const [totalCount, setTotalCount] = useState(1);

    const decreaseCount = () => {
        if (totalCount - 1 >= 1) {
            setTotalCount((oldValue) => oldValue - 1);
        }
    };

    return (
        <View className="flex-1 flex-row w-full px-2">
            <View className="flex-1">
                <Text>Quantity : {totalCount}</Text>
            </View>

            <View className="flex-1 flex-row justify-between">
                {/* for the + sign */}
                <View className="flex-1 items-center justify-center h-16 border border-gray-400 rounded-lg">
                    <TouchableOpacity onPress={() => decreaseCount()}>
                        <Text className="font-black text-5xl">-</Text>
                    </TouchableOpacity>
                </View>

                
                {/* for the - sign */}
                <View className="flex-1 items-center justify-center h-16 border border-gray-400 rounded-lg ml-2">
                    <TouchableOpacity onPress={() => setTotalCount((oldValue) => oldValue + 1)}>
                        <Text className="font-black text-3xl">+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default QuantityCounter;
