import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Myactions';

export const Mystore = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

