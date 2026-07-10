import { Slot } from 'expo-router';
import { View } from 'react-native';
import { ItemsCart } from '../backend/services/cartServices/itemsInCart.js';
import { ItemDataProvider } from './contexts/itemDataContext.jsx';
import '../global.css';
import Header from './components/layout/header.jsx';
import Navigation from './components/layout/navigation.jsx';

export default function RootLayout() {
    return (
        <View className="flex-1 bg-backgroundWhite">
            <Header />

            <ItemDataProvider>
                <ItemsCart>
                    <View className="flex-1">
                        <Slot />
                    </View>

                    <Navigation />
                </ItemsCart>
            </ItemDataProvider>
        </View>
    );
}
