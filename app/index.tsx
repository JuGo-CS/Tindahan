import { View } from "react-native";
import Header from "./components/header.jsx";
import Navigation from "./components/navigation.jsx";
import SearchBar from "./components/items/searchBar.jsx";

export default function Index() {
  return (
    <View className="flex-1 bg-backgroundWhite">
    	<Header />
		<SearchBar />
      {/* <Text className="text-red-700 text-5xl">Edit app/index.tsx to edit this screen.</Text> */}
	  
		<Navigation />

    </View>
  );
}
