import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts');
    console.log('Contacts Response:', response); // Add more detailed logging
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching contacts:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
});

export const addNewContact = createAsyncThunk(
  'contacts/addNew',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (e) {
      console.error('Error adding new contact:', e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const DeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thrunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactID}`);
      return contactID;
    } catch (e) {
      return thrunkAPI.rejectWithValue(e.message);
    }
  }
);
