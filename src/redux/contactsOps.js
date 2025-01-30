import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const CONTACTS_BASE_URL =
  "https://679b6abd33d316846323c7c8.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${CONTACTS_BASE_URL}`);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e?.message || "Cannot fetch contacts");
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${CONTACTS_BASE_URL}`, contact);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e?.message || "Cannot add contact");
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${CONTACTS_BASE_URL}/${id}`);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e?.message || "Cannot delete contact");
    }
  },
);
