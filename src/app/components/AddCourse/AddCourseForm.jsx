
"use client"
import React from 'react';
import CourseInfo from './CourseInfo';
import CourseSyllabus from './CourseSyllabus';
import BatchesUI from './BatchesUI';
import { useForm, FormProvider} from "react-hook-form"

const AddCourseForm = () => {
    const methods=useForm()
    const {register,reset}=methods
    return (
        <div className='min-h-screen bg-(--neutral-color) '>
            <FormProvider {...methods}>
                <div>
                    <CourseInfo />
                </div>
                <div>
                    <CourseSyllabus />
                </div>
                <div>
                    <BatchesUI />
                </div>
            </FormProvider>
        </div>
    );
};

export default AddCourseForm;