import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosconfig';

// Async thunk to create a blog post
export const createBlog = createAsyncThunk(
    'blog/createBlog',
    async ({ title, content, cover_image, hub_id, sub_hub_id }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('cover_image', cover_image);
            formData.append('hub_id', hub_id);
            formData.append('sub_hub_id', sub_hub_id);
            formData.append('is_private', 0); // Assuming you want to send an empty string for created_by  

            const response = await axiosInstance.post(
                '/api/blog',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        // 'Authorization': `Bearer ${token}`, // Uncomment if you need to send a token
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


export const fetchBlogsBySubHub = createAsyncThunk(
    'blog/fetchBlogsBySubHub',
    async (subHubId, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/api/blog/sub-hub/${subHubId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        loading: false,
        error: null,
        blog: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBlog.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.blog = action.payload;
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchBlogsBySubHub.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBlogsBySubHub.fulfilled, (state, action) => {
                state.loading = false;
                state.blog = action.payload;
            })
            .addCase(fetchBlogsBySubHub.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default blogSlice.reducer;