import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Define initial state
const initialState = {
  count: 1,
};

// Create a slice for user management
const countSlice = createSlice({
  name: "counter",
  initialState: {count: 0},
  reducers: {
    setCounter: (state, action) => {
      state.count = action.payload;
    },
  },
});

const navMenuSlice = createSlice({
  name: "navMenu",
  initialState: {
    anchorElNav: true
  },
  reducers: {
    handleOpenNavMenu: (state, action) => {
      state.anchorElNav = action.payload;
    },
    handleCloseNavMenu: (state, action) => {
      state.anchorElNav = action.payload;
    }
  }
})

// Export actions
export const { setCounter } = countSlice.actions;
export const { handleOpenNavMenu } = navMenuSlice.actions;
export const { handleCloseNavMenu } = navMenuSlice.actions;
// Create Redux store
const store = configureStore({
  reducer: {
    counter: countSlice.reducer,
    nav: navMenuSlice.reducer,
  },
});

// Export typed hooks for usage in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const counterReducer = countSlice.reducer;
export const navReducer = navMenuSlice.reducer;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;