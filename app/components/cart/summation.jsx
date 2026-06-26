import { View } from 'react-native';
import Total from '../ui/total.jsx';
import BayadButton from './bayadButton.jsx';
import UtangButton from './utangButton.jsx';

const Summation = ({ totalAmount, onUtangPress, onBayadPress }) => {
    return (
        <View className="w-full bg-white border-t border-gray-200 px-4 pt-4 pb-6 bottom-0 ">
            <View className="mb-4 px-1">
                <Total amount={totalAmount} />
            </View>

            <View className="flex-row w-full gap-3 justify-between">
                <UtangButton onPress={onUtangPress} />
                <BayadButton onPress={onBayadPress} />
            </View>
        </View>
    );
};

export default Summation;
