import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { usePathname, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (route) => pathname === route;
  const getIconColor = (route) => (isActive(route) ? "#10B981" : "#1A3636");
  const getTextClass = (route) =>
    isActive(route) ? "text-primaryGreen" : "text-textBlue";

  return (
    <View className="bg-white border-t-[0.5px] border-gray-800 pt-3 pb-16 flex-row justify-between items-start absolute bottom-0 left-0 right-0">
      {/* 1. Item Tab */}
      <Pressable
        className="items-center justify-center flex-1"
        onPress={() => router.push("/pages/item")}
      >
        <Ionicons
          name="home-outline"
          size={26}
          color={getIconColor("/pages/item")}
        />
        <Text
          className={`${getTextClass("/pages/item")} text-xs font-black mt-1`}
        >
          Item
        </Text>
      </Pressable>

      {/* 2. Cart Tab */}
      <Pressable
        className="items-center justify-center flex-1"
        onPress={() => router.push("/pages/cart")}
      >
        <Ionicons
          name="cart-outline"
          size={26}
          color={getIconColor("/pages/cart")}
        />
        <Text
          className={`${getTextClass("/pages/cart")} text-xs font-medium mt-1`}
        >
          Cart
        </Text>
      </Pressable>

      {/* 3. Utang Tab */}
      <Pressable
        className="items-center justify-center flex-1"
        onPress={() => router.push("/pages/utang")}
      >
        <MaterialCommunityIcons
          name="paperclip"
          size={26}
          color={getIconColor("/pages/utang")}
        />
        <Text
          className={`${getTextClass("/pages/utang")} text-xs font-medium mt-1`}
        >
          Utang
        </Text>
      </Pressable>

      {/* 4. Log Tab */}
      <Pressable
        className="items-center justify-center flex-1"
        onPress={() => router.push("/pages/log")}
      >
        <MaterialCommunityIcons
          name="clipboard-text-outline"
          size={26}
          color={getIconColor("/pages/log")}
        />
        <Text
          className={`${getTextClass("/pages/log")} text-xs font-medium mt-1`}
        >
          Log
        </Text>
      </Pressable>
    </View>
  );
};

export default Navigation;
