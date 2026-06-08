import { View, Text, Image } from 'react-native';
import SearchBar from '../components/items/searchBar.jsx';

const ItemScreen = () => {
    const cloudName = 'djssijeqe';
    const versionNumber = 'v1780757228';
    const fileName = 'taihing_mushrooms_425g.jpg';

    const testImageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${versionNumber}/${fileName}`;

    return (
        <View className="flex-1">
            <SearchBar />

            {/* <View className="px-4">
                <Text className="font-semibold text-3xl text-slate-500">
                    This is Item Page.
                </Text>
            </View> */}

            <View className="px-4 mt-8 items-center">
                <View className="bg-white p-5 rounded-2xl shadow-2xl items-center w-full max-w-xs">
                    <View className="w-48 h-48 bg-slate-50 rounded-xl items-center justify-center p-2 mb-4">
                        <Image
                            source={{ uri: testImageUrl }}
                            className="w-full h-full"
                            resizeMode="contain"
                        />
                    </View>

                    {/* Product Metadata Labels */}
                    <Text className="text-lg font-bold text-slate-700 capitalize">
                        Taihing Mushrooms
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default ItemScreen;
