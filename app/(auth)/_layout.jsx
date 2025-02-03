import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen
        name="age-confirmation"
        options={{ title: "Age Confirmation" }}
      />
      <Stack.Screen
        name="password-changed"
        options={{ title: "Password Changed" }}
      />
      <Stack.Screen name="check-inbox" options={{ title: "Check Inbox" }} />
      <Stack.Screen
        name="otp-confirmation"
        options={{ title: "Confirm OTP" }}
      />
      <Stack.Screen
        name="congratulations"
        options={{ title: "Congratulations" }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{ title: "Forgot Password" }}
      />
      <Stack.Screen
        name="reset-password"
        options={{ title: "Reset Password" }}
      />
      <Stack.Screen
        name="reset-password-otp"
        options={{ title: "Reset Password OTP" }}
      />
    </Stack>
  );
}
