import { createSlice } from "@reduxjs/toolkit";
import {
  confirmDevice,
  forgotPassword,
  resendOTP,
  signIn,
  signUp,
  verifyEmailOtp,
  fetchToken,
  logout,
} from "@/redux/auth/authActions";
import { addTokenToAsyncStorage } from "@/utils/authUtils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
    token: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
    },
    setUserAuth: (state, action) => {
      state.isAuthenticated = true;
      if (action.payload) {
        state.user = action.payload;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    resetState: (state) => {
      // Reset to initial state
      Object.assign(state, {
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
        token: null,
      });
    },
  },
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true;
      state.error = null;
    };

    const handleRejected = (state, action) => {
      state.loading = false;
      state.error =
        action.payload?.error || action.error.message || "An error occurred";
    };
    builder
      .addCase(signIn.pending, handlePending)
      .addCase(signIn.fulfilled, (state, action) => {
        const userToStore = action.payload?.data || action.payload;
        console.log("userToStore", action.payload);
        state.loading = false;
        state.isAuthenticated = true;
        state.user = userToStore;
        state.token = action.payload?.data?.token;

        addTokenToAsyncStorage(action.payload?.data?.token?.accessToken);
      })
      .addCase(signIn.rejected, handleRejected)
      .addCase(confirmDevice.pending, handlePending)
      .addCase(confirmDevice.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload?.data;
        state.token = action.payload?.data?.token;
      })
      .addCase(confirmDevice.rejected, handleRejected)
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, (state, action) => {
        console.log("SIGNUP FUFILLED", action);
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload?.data;
        state.token = null;
      })
      .addCase(signUp.rejected, handleRejected)
      .addCase(forgotPassword.pending, handlePending)
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, handleRejected)
      .addCase(verifyEmailOtp.pending, handlePending)
      .addCase(verifyEmailOtp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(verifyEmailOtp.rejected, handleRejected)
      .addCase(fetchToken.pending, handlePending)
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.loading = false;
        // console.log('PAYLOAD:', action.payload);
        state.token = action.payload;
        addTokenToAsyncStorage(action.payload?.access);
      })
      .addCase(fetchToken.rejected, handleRejected)
      .addCase(resendOTP.pending, handlePending)
      .addCase(resendOTP.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resendOTP.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.token = null;
        state.user = null;
      })
      .addCase(logout.rejected, handleRejected);
  },
});

export const {
  logoutUser,
  setUserAuth,
  setLoading,
  setError,
  updateUser,
  setToken,
  clearError,
  resetState,
} = authSlice.actions;

export default authSlice.reducer;
