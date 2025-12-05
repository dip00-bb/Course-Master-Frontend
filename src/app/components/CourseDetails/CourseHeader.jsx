"use client";

import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { createStripePayment, getCheckOutUrl } from "@/app/lib/features/payment/paymentSlice";
import useAuth from "@/app/Hooks/useAuth";
import { useEffect } from "react";



export default function CourseHeader({ course }) {
  const { user } = useAuth()
  const paymentInfo = {
    course: course.title,
    price: course.price,
    istructor: course.instructorName,
    courseId: course._id,
    customerEmail: user?.email
  }
  const dispatch = useAppDispatch()

  const handleEnroll = () => {
    dispatch(createStripePayment(paymentInfo))

  };

  const url = useAppSelector(getCheckOutUrl)
  useEffect(() => {
    if (url) {
      window.location.href = url
    }
  }, [url])

  return (
    <div className="bg-(--primary-color) border-b border-gray-200">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Course Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Category Badge */}
            <Badge variant="primary">{course.category}</Badge>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {course.title}
            </h1>

            {/* Instructor */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-(--accent-color) flex items-center justify-center text-(--primary-color) font-semibold text-lg">
                {course.instructorName.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-gray-500">Instructor</p>
                <p className="text-lg font-semibold text-gray-900">{course.instructorName}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Right: Thumbnail & Enroll */}
          <div className="lg:col-span-1">
            <div className="bg-(--primary-color) rounded-2xl shadow-xl border border-gray-200 overflow-hidden sticky top-4">
              {/* Thumbnail */}
              <div className="aspect-video w-full bg-gray-200">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Price & Enroll */}
              <div className="p-6 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ${course.price}
                  </span>
                  <span className="text-gray-500 line-through text-lg">${course.price + 100}</span>
                </div>

                <Button onClick={handleEnroll} className="w-full cursor-pointer">
                  Enroll Now
                </Button>

                <div className="pt-4 border-t border-gray-200 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-(--accent-color)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-(--accent-color)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-(--accent-color)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{course.syllabus.length} modules</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}