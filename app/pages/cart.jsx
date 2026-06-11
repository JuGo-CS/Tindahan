import { View, Text, ScrollView } from 'react-native';
import Summation from '../components/cart/summation.jsx';

const CartScreen = () => {
    return (
        <View className="flex-1 w-full justify-between bg-backgroundWhite mb-28 pb-3">
            <ScrollView className="flex-1 px-4 pt-4">
                <Text className="font-semibold text-3xl text-slate-500">
                    This is Cart Page.
                </Text>
            </ScrollView>

            <Summation
                className="mb-28"
                totalAmount={0}
                onUtangPress={() => console.log('Utang')}
                onBayadPress={() => console.log('Bayad')}
            />
        </View>
    );
};

export default CartScreen;
