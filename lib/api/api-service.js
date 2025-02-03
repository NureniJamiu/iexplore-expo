import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";
import { Alert } from "react-native";
import { TOKEN_STORAGE_KEY } from "@/constants";
import { url } from "@/lib/api/url";

export const API_BASE_URL = "https://ixpl-backend.vercel.app/api/v1";

const TIMEOUT = 25000;

// Define auth-free endpoints
const AUTH_FREE_ENDPOINTS = [
  url.postInitiateLogin,
  url.postInitiateSignup,
  url.fetchToken,
  url.verifyEmailOtp,
];

const apiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

apiService.interceptors.request.use(async (config) => {
  const csrfToken = await AsyncStorage.getItem("csrfToken");

  // Check if the current endpoint requires authentication
  const isAuthFreeEndpoint = AUTH_FREE_ENDPOINTS.some((endpoint) =>
    config.url.includes(endpoint)
  );

  // Only add the bearer token if the endpoint requires authentication
  if (!isAuthFreeEndpoint) {
    const token = await AsyncStorage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  if (csrfToken) {
    config.headers["X-CSRFToken"] = csrfToken;
  }

  console.log("============HEADERS============");
  console.log("API Request Headers:", config.headers);
  console.log("===============================");

  console.log("============URL CALLED============");
  console.log(
    "API Request Url:",
    `(${config.method}) ${config.baseURL}${config.url}`
  );
  console.log("====================================");

  console.log("============PAYLOAD SENT============");
  console.log("API Request Payload:", config.data);
  console.log("====================================");

  return config;
});

apiService.interceptors.response.use(
  (response) => {
    console.log("==============SUCCESS RESPONSE================");
    console.log("API Response:", response.data);
    console.log("==============================================");
    return response;
  },
  (error) => {
    console.log("==============ERROR RESPONSE================");
    console.error("API Error:", error.response);
    console.log("==============================================");

    if (error.response) {
      if (error.response.status === 401) {
        AsyncStorage.removeItem(TOKEN_STORAGE_KEY).then(() =>
          console.log("token removed")
        );
        Alert.alert(
          "Error",
          "Your session has expired. Please login to continue."
        );
      } else {
        Alert.alert(
          "Error",
          error.response.data.message || "An error occurred. Please try again."
        );
      }
    } else if (error.code === "ECONNABORTED") {
      Alert.alert("Error", "The request took too long. Please try again.");
    } else {
      Alert.alert("Error", "An unexpected error occurred.");
    }

    return Promise.reject(error);
  }
);

export const apiGet = async (url, headers = {}) => {
  const state = await NetInfo.fetch();
  if (state.isConnected) {
    return apiService
      .get(url, {
        headers: {
          ...apiService.defaults.headers,
          ...headers,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  } else {
    throw new Error("No internet connection.");
  }
};

export const apiPost = async (url, payload, headers = {}) => {
  const state = await NetInfo.fetch();
  if (state.isConnected) {
    return apiService
      .post(url, payload, {
        headers: { ...apiService.defaults.headers, ...headers },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  } else {
    throw new Error("No internet connection.");
  }
};

export const apiPut = async (url, payload, headers = {}) => {
  const state = await NetInfo.fetch();
  if (state.isConnected) {
    return apiService
      .put(url, payload, {
        headers: { ...apiService.defaults.headers, ...headers },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  } else {
    throw new Error("No internet connection.");
  }
};

export const apiRemove = async (url, headers = {}) => {
  const state = await NetInfo.fetch();
  if (state.isConnected) {
    return apiService
      .delete(url, { headers: { ...apiService.defaults.headers, ...headers } })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  } else {
    throw new Error("No internet connection.");
  }
};
