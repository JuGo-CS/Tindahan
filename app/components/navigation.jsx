import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";

const Navigation = () => {
    return (
        <View className="bg-white border-t-[0.5px] border-gray-800 pt-3 pb-16 flex-row justify-between items-start absolute bottom-0 left-0 right-0">
      
            {/* 1. Item Tab (Active / Green) */}
            <Pressable className="items-center justify-center flex-1">
                {/* Icons require string properties, so we pass the hex code directly */}
                <Ionicons name="home-outline" size={26} color="#10B981" />
                <Text className="text-primaryGreen text-xs font-black mt-1">
                    Item
                </Text>
            </Pressable>

            {/* 2. Cart Tab */}
            <Pressable className="items-center justify-center flex-1">
                <Ionicons name="cart-outline" size={26} color="#1A3636" />
                <Text className="text-textBlue text-xs font-medium mt-1">
                    Cart
                </Text>
            </Pressable>

            {/* 3. Utang Tab */}
            <Pressable className="items-center justify-center flex-1">
                <MaterialCommunityIcons name="paperclip" size={26} color="#1A3636" />
                <Text className="text-textBlue text-xs font-medium mt-1">
                    Utang
                </Text>
            </Pressable>

            {/* 4. Log Tab */}
            <Pressable className="items-center justify-center flex-1">
                <MaterialCommunityIcons
                    name="clipboard-text-outline"
                    size={26}
                    color="#1A3636"
                />
                <Text className="text-textBlue text-xs font-medium mt-1">
                    Log
                </Text>
            </Pressable>
        </View>
    );
};

export default Navigation;