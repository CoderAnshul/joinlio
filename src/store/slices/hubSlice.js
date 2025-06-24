import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosconfig';

export const createHub = createAsyncThunk(
    'hub/createHub',
    async ({ name, description, icon }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('icon', icon);

            const response = await axiosInstance.post(
                '/api/hub/create',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


export const listHubs = createAsyncThunk(
    'hub/listHubs',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/api/hub/list');
            console.log('Response from listHubs:', response.data?.data);
            return response.data?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const hubSlice = createSlice({
    name: 'hub',
    initialState: {
        hub: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createHub.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createHub.fulfilled, (state, action) => {
                state.loading = false;
                state.hub = action.payload;
            })
            .addCase(createHub.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(listHubs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(listHubs.fulfilled, (state, action) => {
                state.loading = false;
                state.hub = action.payload; // Assuming the payload is an array of hubs
            })
            .addCase(listHubs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
            
    },
});

export default hubSlice.reducer;