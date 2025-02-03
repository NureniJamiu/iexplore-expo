// file created for token management - FILE HAS SOME ISSUES
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "../constants";

export const getStoredToken = async () => {
  try {
    return await AsyncStorage.getItem(USER_STORAGE_KEY);
  } catch (error) {
    console.log("Error getting token:", error);
    return null;
  }
};

export const clearStoredToken = async () => {
  try {
    await AsyncStorage.removeItem(USER_STORAGE_KEY);
  } catch (error) {
    console.log("Error clearing token:", error);
  }
};

export const addTokenToAsyncStorage = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN_STORAGE_KEY, token).then(() => {
      console.log("Token saved in AsyncStorage");
    });
  } catch (error) {
    console.log("Error saving token in AsyncStorage:", error);
  }
};
