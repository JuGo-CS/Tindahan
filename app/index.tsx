import { Redirect } from "expo-router";

export default function Index() {
	// Forces the app to instantly display the item page upon opening
	return <Redirect href="/pages/item" />;
}