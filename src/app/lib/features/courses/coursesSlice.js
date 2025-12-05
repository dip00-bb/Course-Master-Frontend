import { axiosPublic } from "@/app/axiosInstance/useAxiosPublice"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchAsyncCourses = createAsyncThunk(
  'home-courses/fetchAsyncCourses',
  async () => {
    const response = await axiosPublic.get('/api/courses/home-course')
    return response.data
  }
)

export const fetchAsyncCoursesByQuery = createAsyncThunk(
  'home-courses/fetchAsyncCoursesByQuery',
  async (params) => {
    // Convert tags array to comma-separated string
    const queryParams = { ...params }
    if (Array.isArray(queryParams.tags) && queryParams.tags.length > 0) {
      queryParams.tags = queryParams.tags.join(',')
    } else if (Array.isArray(queryParams.tags) && queryParams.tags.length === 0) {
      delete queryParams.tags
    }
    
    // Remove empty values
    Object.keys(queryParams).forEach(key => {
      if (queryParams[key] === '' || queryParams[key] === undefined || queryParams[key] === null) {
        delete queryParams[key]
      }
    })
    
    console.log('Sending params:', queryParams)
    
    const response = await axiosPublic.get('/api/courses/home-course', {
      params: queryParams
    })
    return response.data
  }
)

const initialState = {
  courses: [],
  meta: {
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0
  },
  loading: false,
  error: null
}

export const coursesSlice = createSlice({
  name: "home-courses",
  initialState,
  reducers: {
    resetCourses: (state) => {
      state.courses = []
      state.meta = initialState.meta
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchAsyncCourses
      .addCase(fetchAsyncCourses.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAsyncCourses.fulfilled, (state, action) => {
        state.loading = false
        state.courses = action.payload.courses || []
        state.meta = action.payload.meta || initialState.meta
      })
      .addCase(fetchAsyncCourses.rejected, (state, action) => {
        state.loading = false
        state.courses = []
        state.error = action.error.message
      })
      // fetchAsyncCoursesByQuery
      .addCase(fetchAsyncCoursesByQuery.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAsyncCoursesByQuery.fulfilled, (state, action) => {
        state.loading = false
        state.courses = action.payload.courses || []
        state.meta = action.payload.meta || initialState.meta
      })
      .addCase(fetchAsyncCoursesByQuery.rejected, (state, action) => {
        state.loading = false
        state.courses = []
        state.error = action.error.message
      })
  }
})

export const { resetCourses } = coursesSlice.actions

export const getCoursesForHome = (state) => {
  return state.courses.courses || []
}

export const getCoursesMeta = (state) => {
  return state.courses.meta || initialState.meta
}

export const getCoursesLoading = (state) => {
  return state.courses.loading
}

export const getCoursesError = (state) => {
  return state.courses.error
}

export default coursesSlice.reducer