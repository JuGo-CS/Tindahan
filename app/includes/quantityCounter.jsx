import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const QuantityCounter = () => {
    const [totalCount, setTotalCount] = useState(1);

    const decreaseCount = () => {
        if (totalCount - 1 >= 1) {
            setTotalCount(totalCount - 1);
        }
    };

    return (
        <View className="flex-1 flex-row justify-between">
            <Text>Quantity : {totalCount}</Text>

            <View className="flex-row bg-red-500 justify-between">
                {/* for the + sign */}
                <TouchableOpacity onPress={() => setTotalCount(totalCount + 1)}>
                    <Text>+</Text>
                </TouchableOpacity>

                {/* for the - sign */}
                <TouchableOpacity onPress={() => decreaseCount()}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QuantityCounter;
