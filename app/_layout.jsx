import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts } from "expo-font";
import "@/global.css";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkOnboardingStatus() {
      const status = await AsyncStorage.getItem("onboardingComplete");
      setOnboardingComplete(status === "true");
      setIsLoading(false);
    }

    checkOnboardingStatus();
  }, []);

  useEffect(() => {
    if (loaded && !isLoading) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isLoading]);

  if (!loaded || isLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GluestackUIProvider>
          <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }}>
              {onboardingComplete ? (
                <Stack.Screen name="(tabs)" />
              ) : (
                <Stack.Screen name="(onboarding)/index" />
              )}
              <Stack.Screen name="+not-found" />
            </Stack>
            <Toast visibilityTime={6000} />
          </SafeAreaProvider>
        </GluestackUIProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
