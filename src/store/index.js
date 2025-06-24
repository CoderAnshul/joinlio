// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './slices/signupSlice'; 
import signInReducer from './slices/signinSlice'
import hubReducer from './slices/hubSlice';
import subHub from './slices/subhub'; 
import blogReducer from './slices/blog';
import user from './slices/user';
import groupReducer from './slices/group'; // Assuming you have a group slice

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signInReducer,
    hub: hubReducer,
    subhub: subHub,

    blog: blogReducer,
    user: user,
    group: groupReducer, // Add the group reducer here
  },
});
