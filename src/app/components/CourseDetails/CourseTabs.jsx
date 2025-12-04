"use client";

import { useState } from "react";
import CourseOverview from "./CourseOverview";
import CourseSyllabus from "./CourseSyllabus";
import CourseBatches from "./CourseBatches";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "syllabus", label: "Syllabus" },
  { id: "batches", label: "Batches" },
  { id: "lessons", label: "Lessons" },
];

export default function CourseTabs({ course }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">

      <div className="bg-(--primary-color) rounded-xl shadow-sm border border-gray-200 p-2">
        <div className="flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-(--accent-color) text-(--primary-color) shadow-md"
                  : "text-gray-600 hover:bg-(--neutral-color)"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>


      <div className="bg-(--primary-color) rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        {activeTab === "overview" && <CourseOverview course={course} />}
        {activeTab === "syllabus" && <CourseSyllabus syllabus={course.syllabus} />}
        {activeTab === "batches" && <CourseBatches batches={course.batches} />}
        {/* {activeTab === "lessons" && <CourseLessons lessons={course.lessons} />} */}
      </div>
    </div>
  );
}
