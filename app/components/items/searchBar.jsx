import { TextInput, View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = ({ value, onChangeText, onClearSearch }) => {
    const handleClearInput = () => {
        onChangeText('');
        if (onClearSearch) {
            onClearSearch();
        }
    };

    return (
        <View className="px-4 my-4">
            <View className="flex-row items-center border-[1px] border-primaryGreen bg-white rounded-xl px-3 h-16">
                <Ionicons name="search-outline" size={30} color="#9CA3AF" />

                <TextInput
                    placeholder="Ginisa Mix..."
                    className="flex-1 ml-2 text-xl h-full"
                    editable={true}
                    value={value}
                    onChangeText={onChangeText}
                />

                <Pressable
                    onPress={handleClearInput}
                    className="p-1 active:opacity-50"
                >
                    <Ionicons name="close-circle" size={28} color="#9CA3AF" />
                </Pressable>
            </View>
        </View>
    );
};

export default SearchBar;
