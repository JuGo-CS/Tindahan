import { Pressable, Text } from "react-native";

const BayadButton = ({ onPress }) => {
    return (
        <Pressable 
            onPress={onPress}
            className="flex-1 bg-activeBlue active:bg-inactiveBlue py-4 rounded-xl items-center justify-center"
        >
            <Text className="text-white text-3xl font-black tracking-wide">
                Bayad
            </Text>
        </Pressable>
    );
};

export default BayadButton;