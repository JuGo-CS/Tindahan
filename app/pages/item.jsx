import { View, Text } from "react-native";
import SearchBar from "../components/items/searchBar.jsx";

const ItemScreen = () => {
    return ( 
        <View className="flex-1">
            <SearchBar />
            
            <View className="px-4">
                <Text className="font-semibold text-3xl text-slate-500">
                    This is Item Page.
                </Text>
            </View>
        </View>
    );
}
 
export default ItemScreen;