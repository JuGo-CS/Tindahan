import { TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = () => {
    return (
        <View className="px-4 my-4">
            <View className="flex-row items-center border-[1px] border-primaryGreen bg-white rounded-xl px-3 h-16">
                <Ionicons name="search-outline" size={30} color="#9CA3AF" />

                <TextInput
                    placeholder="Ginisa Mix..."
                    className="flex-1 ml-2 text-xl h-full"
                    editable={true}
                />
            </View>
        </View>
    );
};

export default SearchBar;
