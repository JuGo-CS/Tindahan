import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';

const Toast = ({ message, visible, onHide, duration = 2500 }) => {
    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const slideAnimation = useRef(new Animated.Value(-40)).current;

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(fadeAnimation, {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(slideAnimation, {
                    toValue: 0,
                    duration: 350,
                    useNativeDriver: true,
                }),
            ]).start();

            const timer = setTimeout(() => {
                Animated.timing(fadeAnimation, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => {
                    onHide();
                });
            }, duration);

            return () => clearTimeout(timer);
        } else {
            fadeAnimation.setValue(0);
            slideAnimation.setValue(-40);
        }
    }, [visible]);

    if (!visible) return null;
    return (
        <View className="absolute -top-16 left-4 right-4 z-50 items-center justify-center pointer-events-none">
            <Animated.View
                style={{
                    opacity: fadeAnimation,
                    transform: [{ translateY: slideAnimation }],
                }}
                className="bg-[#1A3636] px-6 py-3 rounded-full shadow-lg border border-textBlue flex-row items-center"
            >
                <Text className="text-white text-lg font-bold tracking-wide text-center">
                    {message}
                </Text>
            </Animated.View>
        </View>
    );
};

export default Toast;
