import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { useState } from "react";


const Header = () => {
    const router = useRouter();
  
    const [storeName, setStoreName] = useState("Lorna");

    return (
        <View className="bg-[#10B981] px-4 pt-14 pb-3 flex-row justify-between items-center">
            <Text className="text-white text-3xl font-bold">{storeName}'s Store</Text>
            {/* <Text className="text-white text-3xl font-bold">Lorna's Store</Text> */}
            <Pressable
                onPress={() => router.push("/profile")}
                className="w-10 h-10 rounded-full bg-gray-300 justify-center items-center"
            >
                <Image
                source={require("../../assets/images/react-logo.png")}
                className="w-10 h-10 rounded-full"
                />
            </Pressable>
        </View>
    );
};

export default Header;
