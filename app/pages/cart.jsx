import { View } from 'react-native';
import Summation from '../components/cart/summation.jsx';
import ItemCartGrid from '../components/cart/itemCartGrid.jsx';
import { useItemContext } from '../../backend/pages/cartServices/itemsInCart.js';

const CartScreen = () => {
    const { getItemLists } = useItemContext();
    const itemsInCart = getItemLists();

    const totalAmount = itemsInCart.reduce((sum, cartItem) => {
        const price = cartItem.item?.item_units?.[0]?.type_price || 0;
        return sum + price * cartItem.quantity;
    }, 0);

    return (
        <View className="flex-1 w-full justify-between bg-backgroundWhite mb-28 pb-3">
            <ItemCartGrid items={itemsInCart} />

            <Summation
                totalAmount={totalAmount}
                onUtangPress={() => console.log('Utang')}
                onBayadPress={() => console.log('Bayad')}
            />
        </View>
    );
};

export default CartScreen;
