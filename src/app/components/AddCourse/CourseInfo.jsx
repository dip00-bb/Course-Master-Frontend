import React from "react";
import { useFormContext } from "react-hook-form";

const CourseInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-(--primary-color) rounded-lg shadow-md p-6">
      <div className="">
        {/* Header */}
        <h2 className="text-xl font-semibold mb-4">Course Information</h2>

        {/* Course Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Course Title*</label>
          <input
            type="text"
            placeholder="e.g. Introduction to Python Programming"
            {...register("title", { required: "Course title is required" })}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--accent-color]"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Instructor + Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Instructor */}
          <div>
            <label className="block text-sm font-medium mb-1">Instructor*</label>
            <input
              type="text"
              placeholder="e.g. Jane Doe"
              {...register("instructor", { required: "Instructor name is required" })}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--accent-color]"
            />
            {errors.instructor && (
              <p className="text-red-500 text-sm mt-1">
                {errors.instructor.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Price (USD)*</label>
            <input
              type="number"
              placeholder="e.g. 99.99"
              step="0.01"
              {...register("price", { required: "Price is required" })}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--accent-color]"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
            )}
          </div>
        </div>

        {/* Course Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Course Description*</label>
          <textarea
            rows="4"
            placeholder="Provide a detailed description of the course content, objectives, and target audience."
            {...register("description", { required: "Description is required" })}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--accent-color]"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
