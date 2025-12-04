import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Slicer
const grocerySlice = createSlice({
  name: "grocery",
  initialState: {
    items: [],
  },
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter((x) => x.id !== action.payload.id);
    },
    update(state, action) {
      state.items = state.items.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
    },
    setAll(state, action) {
      state.items = action.payload;
    },
  },
});

// Store
export const store = configureStore({
  reducer: {
    grocery: grocerySlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const { add, remove, update, setAll } = grocerySlice.actions;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
