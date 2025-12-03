import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./features/courses/coursesSlice";

export const store = configureStore({
    reducer: {
       courses: courseReducer
        
    }
})