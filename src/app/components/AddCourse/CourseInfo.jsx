"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { MultiSelect } from "primereact/multiselect"

const tagOptions = [
  { label: "Beginner", value: "beginner" },
  { label: "Advanced", value: "advanced" },
  { label: "Project Based", value: "project-based" },
  { label: "Certificate", value: "certificate" },
  { label: "Popular", value: "popular" },
];

const CourseInfo = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-(--primary-color) rounded-xl p-6 border border-(--neutral-color)">
      <h2 className="text-xl font-semibold mb-6">Course Information</h2>

      {/* Course Title */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Course Title*</label>
        <input
          type="text"
          {...register("title", { required: "Course title is required" })}
          placeholder="e.g. Introduction to Python Programming"
          className="w-full px-3 py-2 rounded-md border border-(--neutral-color) focus:outline-none focus:ring-2 focus:ring-(--accent-color)"
        />
        {errors.title && (
          <p className="text-(--accent-color) text-sm mt-1">{errors.title.message}</p>
        )}
      </div>


      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Course thumbnail*</label>
        <input
          type="url"
          {...register("thumbnail", { required: "Course thumbnail is required" })}
          placeholder="e.g. https://uploads/2025/11/what-is-a-thumbnail.png"
          className="w-full px-3 py-2 rounded-md border border-(--neutral-color) focus:outline-none focus:ring-2 focus:ring-(--accent-color)"
        />
        {errors.thumbnail && (
          <p className="text-(--accent-color) text-sm mt-1">{errors.thumbnail.message}</p>
        )}
      </div>

      {/* Instructor + Price */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Instructor */}
        <div>
          <label className="block text-sm font-medium mb-1">Instructor*</label>
          <input
            type="text"
            {...register("instructor", { required: "Instructor name is required" })}
            placeholder="e.g. Jane Doe"
            className="w-full px-3 py-2 rounded-md border border-(--neutral-color) focus:outline-none focus:ring-2 focus:ring-(--accent-color)"
          />
          {errors.instructor && (
            <p className="text-(--accent-color) text-sm mt-1">
              {errors.instructor.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Price (USD)*</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: "Price is required" })}
            placeholder="e.g. 99.00"
            className="w-full px-3 py-2 rounded-md border border-(--neutral-color) focus:outline-none focus:ring-2 focus:ring-(--accent-color)"
          />
          {errors.price && (
            <p className="text-(--accent-color) text-sm mt-1">{errors.price.message}</p>
          )}
        </div>
      </div>

      {/* Category */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Category*</label>
        <select
          {...register("category", { required: "Category is required" })}
          className="w-full px-3 py-2 rounded-md border border-(--neutral-color) bg-(--primary-color) focus:outline-none focus:ring-2 focus:ring-(--accent-color)"
        >
          <option value="">Select category</option>
          <option value="programming">Programming</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="business">Business</option>
          <option value="data-science">Data Science</option>
        </select>
        {errors.category && (
          <p className="text-(--accent-color) text-sm mt-1">{errors.category.message}</p>
        )}
      </div>

      {/* Tags (PrimeReact MultiSelect) */}
      <div className="mb-5 w-full px-3 py-2 rounded-md border border-(--neutral-color) bg-(--primary-color) focus:outline-none focus:ring-2 focus:ring-(--accent-color)">
        <label className="block text-sm font-medium mb-1">Tags*</label>

        <Controller
          name="tags"
          control={control}
          rules={{ required: "At least one tag is required" }}
          render={({ field }) => (
            <MultiSelect
              {...field}
              options={tagOptions}
              optionLabel="label"
              placeholder="Select Tags"
              display="chip"
              className="w-full md:w-20rem"
              style={{
                backgroundColor: "var(--primary-color)",
                borderColor: "var(--neutral-color)",
              }}
              pt={{
                wrapper: {
                  className: "gap-2 p-2"
                },
                token: {
                  className: "px-3 py-1 rounded-full mr-2 mb-1",
                  style: {
                    backgroundColor: "var(--accent-color)",
                    color: "var(--primary-color)"
                  }
                },
                panel: {
                  className: "p-3 rounded-lg",
                  style: {
                    backgroundColor: "var(--primary-color)"
                  }
                },
                list: {
                  style: {
                    backgroundColor: "var(--primary-color)"
                  }
                },
                item: {
                  className: "flex items-center gap-2 px-4 py-2 rounded-md mb-1 transition-colors"
                },
                checkbox: {
                  className: "w-4 h-4 rounded border-2 flex-shrink-0",
                  style: {
                    borderColor: "var(--neutral-color)"
                  }
                },
                checkboxIcon: {
                  style: {
                    color: "var(--accent-color)"
                  }
                }
              }}
            />
          )}
        />
        {errors.tags && (
          <p className="text-sm mt-1" style={{ color: "var(--accent-color)" }}>
            {errors.tags.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">Course Description*</label>
        <textarea
          rows="4"
          {...register("description", { required: "Description is required" })}
          placeholder="Provide a detailed course description..."
          className="w-full px-3 py-2 rounded-md border border-(--neutral-color) focus:outline-none focus:ring-2 focus:ring-(--accent-color)"
        ></textarea>
        {errors.description && (
          <p className="text-(--accent-color) text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseInfo;
