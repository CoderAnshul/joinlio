import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosconfig';
// Async thunk to create a group
export const createGroup = createAsyncThunk(
    'group/createGroup',
    async ({ name, description, coverImage, members }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('cover_image', coverImage);
            members.forEach((member, idx) => {
                formData.append(`members[${idx}]`, member);
            });

            const response = await axiosInstance.post(
                '/api/group',
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

const groupSlice = createSlice({
    name: 'group',
    initialState: {
        group: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createGroup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createGroup.fulfilled, (state, action) => {
                state.loading = false;
                state.group = action.payload;
            })
            .addCase(createGroup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default groupSlice.reducer;