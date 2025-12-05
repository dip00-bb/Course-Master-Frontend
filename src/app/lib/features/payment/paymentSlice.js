import { axiosPublic } from "@/app/axiosInstance/useAxiosPublice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createStripePayment = createAsyncThunk(
    'stripe-payment/createStripePayment',
    async (payementInfo) => {
        const response = await axiosPublic.post('/api/payment/checkout', payementInfo)
        const url = response.data.url
        return url
    }
)

const initialState = {
    loading: false,
    error: null,
    paymentData: null
}

export const paymentSlice = createSlice({
    name: 'stripe-payment',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(createStripePayment.pending, (state) => {
                state.loading = true
            })
            .addCase(createStripePayment.fulfilled, (state, action) => {
                state.loading = false
                state.paymentData = action.payload
            })
            .addCase(createStripePayment.rejected, (state, action) => {
                state.loading = false,
                    state.paymentData = action.payload
            })
    }
})

export const getCheckOutUrl = (state) => {
    console.log(state.payment.paymentData)
    return state.payment.paymentData
}
export default paymentSlice.reducer