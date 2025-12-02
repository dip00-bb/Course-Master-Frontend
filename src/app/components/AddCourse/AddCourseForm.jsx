
"use client"
import React from 'react';
import CourseInfo from './CourseInfo';
import CourseSyllabus from './CourseSyllabus';
import BatchesUI from './BatchesUI';
import { useForm, FormProvider } from "react-hook-form"

const AddCourseForm = () => {
    const onSubmit = (data) => console.log(data);

    const methods = useForm({
        defaultValues: {
            syllabus: [
                { title: "", description: "" } // 👈 one default module
            ],
        },
    });

    const { register, reset, formState: { errors } } = methods
    return (
        <div className='min-h-screen bg-(--neutral-color) py-10'>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col gap-15 max-w-6xl mx-auto'>

                    <div>
                        <CourseInfo />
                    </div>
                    <div>
                        <CourseSyllabus />
                    </div>
                    <div>
                        <BatchesUI />
                    </div>
                    <div className='w-full flex justify-center'>
                        <button type='submit' className='bg-(--accent-color) py-2.5 px-3 rounded-xl cursor-pointer text-white'>ADD COURSE</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AddCourseForm;