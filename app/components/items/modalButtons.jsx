import { View, TouchableOpacity, Text } from 'react-native';

const ModalButtons = ({ onClose, item, addItemToCart, totalQuantity }) => {
    return (
        <View className="flex-row gap-2 mx-2 h-16">
            <TouchableOpacity
                onPress={() => onClose()}
                className="flex-1 bg-activeOrange p-3 rounded-lg items-center justify-center"
            >
                <Text className="font-black text-2xl text-white">Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    addItemToCart([item, totalQuantity]);
                    onClose();
                }}
                className="flex-1 bg-activeBlue p-3 rounded-lg items-center justify-center"
            >
                <Text className="font-black text-2xl text-white">Add Item</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ModalButtons;
