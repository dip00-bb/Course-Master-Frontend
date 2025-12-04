"use client"
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { fetchAsyncCourses, getCoursesForHome } from '../lib/features/courses/coursesSlice';
import Image from 'next/image';
import CoursesGrid from './CourseGrid';

const PopularCourse = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchAsyncCourses())
    }, [dispatch])

    const data = useAppSelector(getCoursesForHome)

    return (
        <CoursesGrid courses={data} />
    );
};

export default PopularCourse;