import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const USERS_BASE_URL = "https://connections-api.goit.global/users";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `${USERS_BASE_URL}/signup`,
        credentials,
      );
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e?.message || "Registration failed");
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${USERS_BASE_URL}/login`, credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e?.message || "Login failed");
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post(`${USERS_BASE_URL}/logout`);
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e?.message || "Logout failed");
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get(`${USERS_BASE_URL}/current`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e?.message || "Cannot fetch current user failed",
      );
    }
  },
);
