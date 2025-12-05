import { configureStore, createSlice } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

const workoutSlice = createSlice({
    name: "workout",
    initialState: {
        workouts: []
    },
    reducers: {
        add(state, action) {
            state.workouts.push(action.payload);
        },
        remove(state, action) {
            state.workouts = state.workouts.filter(i => i.id !== action.payload);
        },
        update(state, action) {
            state.workouts = state.workouts.map(i => i.id === action.payload.id ? action.payload : i);
        },
        setAll(state, action) {
            state.workouts = action.payload;
        },
    }
})

export const store = configureStore({
    reducer: {
        workout: workoutSlice.reducer,
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// ================= EXPORT
export const { add, remove, update, setAll } = workoutSlice.actions;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();