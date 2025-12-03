import { axiosPublic } from "@/app/axiosInstance/useAxiosPublice"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchAsyncCourses = createAsyncThunk(
  'home-courses/fetchAsyncCourses',
  async () => {
    const response = await axiosPublic.get('/api/courses/home-course')
    return response.data
  }
)

const initialState = {
  courses: [],
  loading: false,
  error: null

}

export const coursesSlice = createSlice({
  name: "home-courses",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCourses.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchAsyncCourses.fulfilled, (state, action) => {
        state.loading = false,
        state.courses = action.payload
      })
      .addCase(fetchAsyncCourses.rejected, (state, action) => {
        state.loading = false,
          state.courses = [],
          state.error = action.payload
      })
  }
})

export const getCoursesForHome = (state) => {
  return state.courses.courses.courses  || []
}

export default coursesSlice.reducer
