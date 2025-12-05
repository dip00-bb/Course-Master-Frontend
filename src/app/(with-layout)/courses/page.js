"use client"

import CoursesGrid from '@/app/components/CourseGrid';
import Pagination from '@/app/components/Pagination';
import { fetchAsyncCourses, getCoursesForHome } from '@/app/lib/features/courses/coursesSlice';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import React, { useEffect } from 'react';

const AllCourse = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchAsyncCourses())
    }, [dispatch])

    const data = useAppSelector(getCoursesForHome)

    console.log("I am data",data)

    return (
        <div>
            <CoursesGrid courses={data} gridCol={'2'} />
            <Pagination/>
        </div>
    );
};

export default AllCourse;