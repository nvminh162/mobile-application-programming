import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        add(state, action) {
            state.todos.push(action.payload);
        },
        remove(state, action) {
            state.todos = state.todos.filter(i => i.id !== action.payload);
        },
        update(state, action) {
            state.todos = state.todos.map(x => x.id === action.payload.id ? action.payload : x);
        },
        setTodos(state, action) {
            state.todos = action.payload;
        },
        toggleStatus(state, action) {
            state.todos = state.todos.map(x => x.id === action.payload ? {...x, isDone: !x.isDone} : x);
        }
    }
})

export const store = configureStore({
    reducer: {
        todo:todoSlice.reducer,
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const { add, remove, update, setTodos, toggleStatus } = todoSlice.actions;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
