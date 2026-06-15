import { View, TouchableOpacity, Text } from "react-native";

const ModalButtons = () => {
    return ( 
        <View className="absolute left-0 right-0 bottom-3 flex-row gap-3 mx-3 h-16">
            <TouchableOpacity className="flex-1 bg-activeOrange p-3 rounded-lg items-center justify-center">
                <Text className="font-black text-2xl text-white">Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-activeBlue p-3 rounded-lg items-center justify-center">
                <Text className="font-black text-2xl text-white">Add Item</Text>
            </TouchableOpacity>
            
        </View>
    );
}
 
export default ModalButtons;