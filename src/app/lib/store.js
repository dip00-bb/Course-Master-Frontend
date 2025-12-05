import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./features/courses/coursesSlice";
import paymentReduces from "./features/payment/paymentSlice"
export const store = configureStore({
    reducer: {
        courses: courseReducer,
        payment: paymentReduces
    }
})