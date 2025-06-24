import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosconfig';

export const submitSignInForm = createAsyncThunk(
  'signin/submitSignInForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        '/api/login',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response from signin API:', response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    loading: false,
    success: false,
    error: null,
    response: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitSignInForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitSignInForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.response = action.payload;
      })
      .addCase(submitSignInForm.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default signinSlice.reducer;