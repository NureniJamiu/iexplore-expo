import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiPost } from "@/lib/api/api-service";
import { url } from "@/lib/api/url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_STORAGE_KEY } from "@/constants";

export const signUp = createAsyncThunk(
  url.postInitiateSignup,
  async (credentials) => {
    const response = await apiPost(url.postInitiateSignup, credentials);
    return response;
  }
);

export const signIn = createAsyncThunk(
  url.postInitiateLogin,
  async (credentials) => {
    const response = await apiPost(url.postInitiateLogin, credentials);
    console.log("AUTH ACTION RESPOSNE", response);
    return response;
  }
);

export const verifyEmailOtp = createAsyncThunk(
  url.verifyEmailOtp,
  async (otp) => {
    const response = await apiPost(url.verifyEmailOtp, { otp });
    return response;
  }
);

export const fetchToken = createAsyncThunk(
  url.fetchToken,
  async (credentials) => {
    const response = await apiPost(url.fetchToken, credentials);
    console.log("MESSAGE GOT HERE", response);
    return response;
  }
);

export const logout = createAsyncThunk(url.logout, async (refreshToken) => {
  try {
    const response = await apiPost(url.logout, refreshToken);
    await AsyncStorage.removeItem(TOKEN_STORAGE_KEY);

    return response;
  } catch (error) {
    console.log(error);
  }
});

export const confirmDevice = createAsyncThunk(
  "auth/device/confirm",
  async (credentials) => {
    const response = await apiPost(url.postAuthConfirmDevice, credentials);
    return response;
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email) => {
    await apiPost(email);
  }
);

export const verifyOTP = createAsyncThunk("auth/verifyOTP", async (otp) => {
  await apiPost(otp);
});

export const resendOTP = createAsyncThunk("auth/resendOTP", async () => {
  await apiPost();
});
