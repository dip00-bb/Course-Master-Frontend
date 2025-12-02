
"use client"
import React from 'react';
import CourseInfo from './CourseInfo';
import CourseSyllabus from './CourseSyllabus';
import BatchesUI from './BatchesUI';
import { useForm, FormProvider } from "react-hook-form"

const AddCourseForm = () => {
    const onSubmit = (data) => console.log(data)
    const methods = useForm()
    const { register, reset, formState: { errors } } = methods
    return (
        <div className='min-h-screen bg-(--neutral-color) py-10'>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className='b'>

                    <div>
                        <CourseInfo />
                    </div>
                    <div>
                        <CourseSyllabus />
                    </div>
                    <div>
                        <BatchesUI />
                    </div>
                    <div>
                        <button type='submit' className='bg-amber-400 py-4'>ADD COURSE</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AddCourseForm;