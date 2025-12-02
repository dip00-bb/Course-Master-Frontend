
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
        <div className="min-h-screen py-10 bg-(--neutral-color)">
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="space-y-10"
                >
                    {/* Page Title */}
                    <h1 className="text-2xl md:text-5xl font-semibold text-center">
                        Create New Course
                    </h1>

                    {/* Course Info */}
                    <section className="bg-(--primary-color) rounded-2xl shadow-sm p-8 border border-(--neutral-color)">
                        <h2 className="text-lg font-semibold mb-6">Course Information</h2>
                        <CourseInfo />
                    </section>

                    {/* Course Syllabus */}
                    <section className="bg-(--primary-color) rounded-2xl shadow-sm p-8 border border-(--neutral-color)">
                        <h2 className="text-lg font-semibold mb-6">Course Syllabus</h2>
                        <CourseSyllabus />
                    </section>

                    {/* Batches */}
                    <section className="bg-(--primary-color) rounded-2xl shadow-sm p-8 border border-(--neutral-color)">
                        <h2 className="text-lg font-semibold mb-6">Course Batches</h2>
                        <BatchesUI />
                    </section>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-xl bg-(--accent-color) text-(--primary-color) font-medium tracking-wide hover:opacity-90 transition"
                        >
                            Add Course
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>

    );
};

export default AddCourseForm;