import { Tabs } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

function CustomTabBar({ state, navigation, descriptors }) {
  return (
    <View className="flex-row h-20 items-center bg-black border-t border-gray-800">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const renderLabel = () => {
          switch (route.name) {
            case "index":
              return "Home";
            case "explore":
              return "Explore";
            case "feeds":
              return "Feed";
            case "drinks":
              return "Drinks";
            default:
              return route.name;
          }
        };

        const renderIcon = (focused) => {
          const iconColor = focused ? "#FFD700" : "#FFFFFF";

          switch (route.name) {
            case "index":
              return <Feather name="home" size={24} color={iconColor} />;
            case "explore":
              return <Feather name="search" size={24} color={iconColor} />;
            case "feeds":
              return <Feather name="activity" size={24} color={iconColor} />;
            case "drinks":
              return <Feather name="coffee" size={24} color={iconColor} />;
            default:
              return <Feather name="circle" size={24} color={iconColor} />;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            className="flex-1 justify-center items-center"
          >
            <Box className="mb-2">{renderIcon(isFocused)}</Box>
            <Text
              className={
                isFocused ? "text-gray-400 text-xs" : "text-white text-xs"
              }
            >
              {renderLabel()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    />
  );
}
