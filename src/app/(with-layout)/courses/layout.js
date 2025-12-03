"use client";

import Sidebar from "@/app/components/CourseUI/Sidebar";





export default function AllCourseLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-(--neutral-color)">
            {/* Sidebar */}

            <Sidebar />

            <div>
                <div>
                    <h1 className="font-bold text-2xl md:text-5xl m-5">Explore Our Courses</h1>
                    <p className="text-xl text-gray-600 m-5">Find the perfect course to to advance and skill your career</p>
                </div>

                <div className="flex-1 p-6 bg-(--neutral-color)">
                    {children}
                </div>
            </div>
        </div>
    );
}
