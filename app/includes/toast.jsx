import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Toast = ({ message, visible, onHide, duration = 4000 }) => {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onHide();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [visible, duration, onHide]);

    if (!visible) return null;

    return (
        <View className="absolute -top-14 left-4 right-4 z-50 items-center justify-center">
            <View className="bg-[#1A3636] px-6 py-3 rounded-full shadow-lg border border-slate-700 flex-row items-center space-x-2">
                <Text className="text-white text-base font-semibold tracking-wide text-center">
                    {message}
                </Text>
            </View>
        </View>
    );
};

export default Toast;
