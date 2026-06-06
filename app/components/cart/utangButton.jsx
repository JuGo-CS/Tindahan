import { Pressable, Text } from "react-native";

const UtangButton = ({ onPress }) => {
    return (
        <Pressable 
            onPress={onPress}
            className="flex-1 bg-activeOrange active:bg-inactiveOrange py-4 rounded-xl items-center justify-center shadow-md"
        >
            <Text className="text-white text-3xl font-black tracking-wide">
                Utang
            </Text>
        </Pressable>
    );
};

export default UtangButton;