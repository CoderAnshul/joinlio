import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosconfig'; // Adjust path as needed

export const uploadGlimpse = createAsyncThunk(
  'glimpse/uploadGlimpse',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/video', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchGlimpses = createAsyncThunk(
  'glimpse/fetchGlimpses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/video');
      console.log("Fetched Glimpses:", response.data);
      return response.data?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const glimpseSlice = createSlice({
  name: 'glimpse',
  initialState: {
    uploadData: null,        // Separate upload success data
    data: null,      // List of glimpses from fetch
    uploadLoading: false,    // Separate loading states
    fetchLoading: false,
    uploadError: null,       // Separate error states
    fetchError: null,
    uploadSuccess: false     // Explicit success flag
  },
  reducers: {
    resetUploadState: (state) => {
      state.uploadData = null;
      state.uploadLoading = false;
      state.uploadError = null;
      state.uploadSuccess = false;
    },
    resetGlimpseState: (state) => {
      // Reset everything
      state.uploadData = null;
      state.data = null;
      state.uploadLoading = false;
      state.fetchLoading = false;
      state.uploadError = null;
      state.fetchError = null;
      state.uploadSuccess = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // Upload actions
      .addCase(uploadGlimpse.pending, (state) => {
        state.uploadLoading = true;
        state.uploadError = null;
        state.uploadSuccess = false;
      })
      .addCase(uploadGlimpse.fulfilled, (state, action) => {
        state.uploadLoading = false;
        state.uploadData = action.payload;
        state.uploadSuccess = true;
      })
      .addCase(uploadGlimpse.rejected, (state, action) => {
        state.uploadLoading = false;
        state.uploadError = action.payload;
        state.uploadSuccess = false;
      })
      // Fetch actions - don't affect upload state
      .addCase(fetchGlimpses.pending, (state) => {
        state.fetchLoading = true;
        state.fetchError = null;
      })
      .addCase(fetchGlimpses.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchGlimpses.rejected, (state, action) => {
        state.fetchLoading = false;
        state.fetchError = action.payload;
      });
  }
});

export const { resetUploadState, resetGlimpseState } = glimpseSlice.actions;
export default glimpseSlice.reducer;