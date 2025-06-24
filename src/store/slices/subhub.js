import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosconfig';
// Async thunk to fetch subhub data by hub id
export const fetchSubhubByHub = createAsyncThunk(
    'subhub/fetchByHub',
    async (hubId, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/api/subhub/by-hub/${hubId}`);
            console.log('Response from fetchSubhubByHub:', response.data?.data);
            return response.data?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const createSubhub = createAsyncThunk(
    'subhub/create',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/api/subhub/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const subhubSlice = createSlice({
    name: 'subhub',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubhubByHub.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSubhubByHub.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSubhubByHub.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createSubhub.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createSubhub.fulfilled, (state, action) => {
                state.loading = false;
                // Assuming the response contains the created subhub data
                state.data = action.payload;
            })
            .addCase(createSubhub.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
            
    },
});

export default subhubSlice.reducer;