import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosconfig';

export const submitSignupForm = createAsyncThunk(
  'signup/submitSignupForm',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        '/api/sign-up',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response from signup API:', response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'signup/verifyOtp',
  async ({ email, otp }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('otp', otp);

      const response = await axiosInstance.post(
        '/api/verify-otp',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Response from verify OTP API:', response.data);
      localStorage.setItem('user', JSON.stringify(response.data?.user));
      localStorage.setItem('accessToken', response.data.token);
      localStorage.setItem('isLoggedIn', 'true');

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    signupSuccess: false,
    otpSuccess: false,
    error: null,
    response: null,
  },
  reducers: {
    resetSignupState: (state) => {
      state.loading = false;
      state.signupSuccess = false;
      state.otpSuccess = false;
      state.error = null;
      state.response = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitSignupForm.pending, (state) => {
        state.loading = true;
        state.signupSuccess = false;
        state.error = null;
      })
      .addCase(submitSignupForm.fulfilled, (state, action) => {
        state.loading = false;
        state.signupSuccess = true;
        state.response = action.payload;
      })
      .addCase(submitSignupForm.rejected, (state, action) => {
        state.loading = false;
        state.signupSuccess = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.otpSuccess = false;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSuccess = true;
        state.response = action.payload;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.otpSuccess = false;
        state.error = action.payload;
      });
  },
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;