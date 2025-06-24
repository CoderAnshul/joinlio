import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosconfig';

// Async thunk to create a group
export const createGroup = createAsyncThunk(
    'group/createGroup',
    async ({ name, description, coverImage, members, privacy }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('privacy', privacy);
            
            if (coverImage) {
                formData.append('cover_image', coverImage);
            }
            
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

// Async thunk to search users
export const searchUsers = createAsyncThunk(
    'group/searchUsers',
    async (searchEmail, { rejectWithValue }) => {
        try {
            // Fix: Pass searchEmail directly, not as an object
            const formData = new FormData();
            formData.append('email', searchEmail);

            const response = await axiosInstance.post(
                '/api/search-users',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            
            // Handle 404 as successful response with empty data
            if (response.status === 404 || (response.data && response.data.status === 404)) {
                return { data: [], message: response.data?.message || "No users found matching the search criteria" };
            }
            
            return response.data;
        } catch (error) {
            // Handle 404 from server as successful empty result
            if (error.response?.status === 404) {
                return { 
                    data: [], 
                    message: error.response?.data?.message || "No users found matching the search criteria" 
                };
            }
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const groupSlice = createSlice({
    name: 'group',
    initialState: {
        group: null,
        users: [], // Add users array to store search results
        searchMessage: null, // Add message for search results
        loading: false,
        searchLoading: false, // Separate loading state for search
        error: null,
        searchError: null, // Separate error state for search
    },
    reducers: {
        // Add reducer to clear users when needed
        clearUsers: (state) => {
            state.users = [];
            state.searchMessage = null;
        },
        // Add reducer to clear errors
        clearErrors: (state) => {
            state.error = null;
            state.searchError = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Create Group cases
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
            })
            // Search Users cases
            .addCase(searchUsers.pending, (state) => {
                state.searchLoading = true;
                state.searchError = null;
            })
            .addCase(searchUsers.fulfilled, (state, action) => {
                state.searchLoading = false;
                state.users = action.payload.data || action.payload;
                state.searchMessage = action.payload.message || null;
            })
            .addCase(searchUsers.rejected, (state, action) => {
                state.searchLoading = false;
                state.searchError = action.payload;
            });
    },
});

export const { clearUsers, clearErrors } = groupSlice.actions;
export default groupSlice.reducer;