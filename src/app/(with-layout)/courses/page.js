"use client"

import CoursesGrid from '@/app/components/CourseGrid';
import { fetchAsyncCourses, getCoursesForHome } from '@/app/lib/features/courses/coursesSlice';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import React, { useEffect } from 'react';

const AllCourse = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchAsyncCourses())
    }, [dispatch])

    const data = useAppSelector(getCoursesForHome)

    return (
        <CoursesGrid courses={data} />
    );
};

export default AllCourse;