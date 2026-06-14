import { Slot } from 'expo-router';
import { View } from 'react-native';
import '../global.css';
import Header from './components/header.jsx';
import Navigation from './components/navigation.jsx';
import { ItemsCart } from './components/cart/itemsInCart.jsx'

export default function RootLayout() {
    return (
        <View className="flex-1 bg-backgroundWhite">
            <Header />

            <ItemsCart>
                <View className="flex-1">
                    <Slot />
                </View>
            </ItemsCart>

            <Navigation />
        </View>
    );
}
