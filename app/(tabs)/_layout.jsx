import { Tabs } from "expo-router";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";

function CustomTabBar({ state, navigation, descriptors }) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 78,
        alignItems: "center",
        backgroundColor: "#000000",
        borderTopWidth: 0.5,
        borderTopColor: "#333333",
      }}
    >
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
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Box marginBottom={8}>{renderIcon(isFocused)}</Box>
            <Text
              color={isFocused ? "$textSecondary" : "$textPrimary"}
              fontSize={"$xs"}
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
