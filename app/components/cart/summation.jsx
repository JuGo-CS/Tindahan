import { View } from 'react-native';
import Total from './total.jsx';
import UtangButton from './utangButton.jsx';
import BayadButton from './bayadButton.jsx';

const Summation = ({ totalAmount, onUtangPress, onBayadPress }) => {
    return (
        <View className="w-full bg-white border-t border-gray-200 px-4 pt-4 pb-6 bottom-0 ">
            <Total amount={totalAmount} />

            <View className="flex-row w-full gap-3 justify-between">
                <UtangButton onPress={onUtangPress} />
                <BayadButton onPress={onBayadPress} />
            </View>
        </View>
    );
};

export default Summation;
