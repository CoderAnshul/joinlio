// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './slices/signupSlice'; 
import signInReducer from './slices/signinSlice'
import hubReducer from './slices/hubSlice';
import subHub from './slices/subhub'; 
import blogReducer from './slices/blog'; // Assuming you have a blog slice
export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signInReducer,
    hub: hubReducer,
    subhub: subHub,
    blog: blogReducer, // Add the blog reducer here
  },
});
