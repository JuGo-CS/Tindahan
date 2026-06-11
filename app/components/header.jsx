import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

const Header = () => {
    const router = useRouter();

    const [storeName, setStoreName] = useState('Lorna');

    return (
        <View className="bg-primaryGreen px-4 pt-14 pb-3 flex-row justify-between items-center">
            <Text className="text-white text-3xl font-bold">
                {storeName}&apos;s Store
            </Text>
            {/* <Text className="text-white text-3xl font-bold">Lorna's Store</Text> */}
            <Pressable
                onPress={() => router.push('/pages/profile')}
                className="w-10 h-10 rounded-full bg-gray-300 justify-center items-center"
            >
                <FontAwesome6 name="circle-user" size={32} color="#10B981" />
            </Pressable>
        </View>
    );
};

export default Header;
