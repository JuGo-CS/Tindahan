import { Text, View } from 'react-native';

const Total = ({ amount = 0 }) => {
    return (
        <View className="flex-row justify-between items-center mb-4 px-1">
            <Text className="text-textBlue text-2xl font-medium">Total:</Text>
            <Text className="text-textBlue text-4xl font-black">₱{amount}</Text>
        </View>
    );
};

export default Total;
