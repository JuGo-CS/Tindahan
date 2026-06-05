import { Stack, useSegments } from "expo-router";
import { useEffect, useRef } from "react";

// Tab order for directional animations
const TAB_ORDER: Record<string, number> = {
	item: 0,
	cart: 1,
	utang: 2,
	log: 3,
};

let previousRouteName: string | null = null;

export default function PagesLayout() {
	const segments = useSegments();
	const currentRouteNameRef = useRef<string | null>(null);

	useEffect(() => {
		const newRoute = segments[segments.length - 1] as string;
		if (newRoute && newRoute !== currentRouteNameRef.current) {
			previousRouteName = currentRouteNameRef.current;
			currentRouteNameRef.current = newRoute;
		}
	}, [segments]);

	const getIsMovingForward = (currentRoute: string) => {
		if (!previousRouteName) return true;
		return TAB_ORDER[currentRoute] > TAB_ORDER[previousRouteName];
	};

	return (
		<Stack
			screenOptions={({ route }) => {
				const currentRoute = route.name as string;
				const isMovingForward = getIsMovingForward(currentRoute);

				return {
					headerShown: false,
					animationEnabled: true,
					transitionSpec: {
						open: {
							animation: "timing",
							config: {
								duration: 400,
							},
						},
						close: {
							animation: "timing",
							config: {
								duration: 300,
							},
						},
					},
					cardStyleInterpolator: ({ current, next, layouts }) => {
						const translateX = current.progress.interpolate({
							inputRange: [0, 1],
							outputRange: [
								isMovingForward ? layouts.screen.width : -layouts.screen.width,
								0,
							],
						});

						const nextTranslateX = next
							? next.progress.interpolate({
									inputRange: [0, 1],
									outputRange: [
										0,
										isMovingForward ? -layouts.screen.width : layouts.screen.width,
									],
								})
							: 0;

						return {
							cardStyle: {
								transform: [{ translateX }],
							},
							overlayStyle: {
								transform: [{ translateX: nextTranslateX }],
							},
						};
					},
				};
			}}
		>
			<Stack.Screen name="item" />
			<Stack.Screen name="cart" />
			<Stack.Screen name="utang" />
			<Stack.Screen name="log" />
		</Stack>
	);
}
