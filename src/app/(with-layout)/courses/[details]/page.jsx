"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { axiosPublic } from "@/app/axiosInstance/useAxiosPublice";
import CourseHeader from "@/app/components/CourseDetails/CourseHeader";
import CourseTabs from "@/app/components/CourseDetails/CourseTabs";


export default function CourseDetailsPage() {
    const { details } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchCourse = async () => {
            try {
                const response = await axiosPublic.get(`/api/courses/home-course/${details}`);
                const data = response?.data?.data
                setCourse(data);
            } catch (error) {
                console.error("Error fetching course:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [details]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-(--neutral-color)">
                <div className="w-12 h-12 border-4 border-(--accent-color) border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-(--neutral-color)">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Course Not Found</h1>
                    <p className="text-gray-600">The course you &apos re looking for doesn &apos t exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-(--neutral-color)">
            <CourseHeader course={course} />

            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <CourseTabs course={course} />
            </div>
        </div>
    );
}
