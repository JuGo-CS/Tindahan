import { Slot } from "expo-router";
import { View } from "react-native";
import "../global.css";
import Header from "./components/header.jsx";
import Navigation from "./components/navigation.jsx";

export default function RootLayout() {
	return (
		<View className="flex-1 bg-backgroundWhite">
			<Header />

			<View className="flex-1 mb-28">
				<Slot />
			</View>

			<Navigation />
		</View>
	);
}
