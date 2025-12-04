import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

/*
{
  studentName: string;

  total: number;
  items: {
    product: {
        id: string;
        name: string;
        category: string;
        description: string;
        price: number;
    };
    quantity: number;
  }[];
}
*/

// Slicer
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    studentName: "",
    total: 0,
    items: [],
  },
  reducers: {
    setAll(state, action) {
      state.studentName = action.payload.studentName;
      state.total = action.payload.total;
      state.items = action.payload.items;
    },
    addCart(state, action) {
      const existed = state.items.find(
        (i) => i.product.id === action.payload.id
      );

      if (existed) existed.quantity += 1;
      else state.items.push({ product: action.payload, quantity: 1 });

      state.total += action.payload.price;
    },
    removeCart(state, action) {
      const existed = state.items.find(
        (i) => i.product.id === action.payload.id
      );

      if (!existed) return state;

      if (existed.quantity > 1) existed.quantity -= 1;
      else
        state.items = state.items.filter(
          (i) => i.product.id !== action.payload.id
        );
    },
    // student name
    authName(state, action) {
      state.studentName = action.payload;
    },
  },
});

// Store
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const { setAll, addCart, removeCart, authName } = cartSlice.actions;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
