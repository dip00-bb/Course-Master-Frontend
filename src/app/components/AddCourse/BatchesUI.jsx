import React from "react";
import { useFormContext } from "react-hook-form";

export default function BatchesUI() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="max-w-5xl mx-auto bg-(--primary-color) rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Batches</h2>

      {/* Batch Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-[--neutral-color] rounded-lg p-4 bg-[--primary-color]">

        {/* Batch Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Batch Name*</label>
          <input
            type="text"
            placeholder="e.g. Fall 2024 Cohort"
            {...register("batchName", {
              required: "Batch name is required",
            })}
            className="w-full px-3 py-2 border border-[--neutral-color] rounded-lg bg-[--primary-color] focus:outline-none"
          />
          {errors.batchName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.batchName.message}
            </p>
          )}
        </div>

        {/* Start Date */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Start Date*</label>
          <input
            type="date"
            {...register("startDate", {
              required: "Start date is required",
            })}
            className="w-full px-3 py-2 border border-[--neutral-color] rounded-lg bg-[--primary-color] focus:outline-none"
          />
          {errors.startDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.startDate.message}
            </p>
          )}
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">End Date*</label>
          <input
            type="date"
            {...register("endDate", {
              required: "End date is required",
            })}
            className="w-full px-3 py-2 border border-[--neutral-color] rounded-lg bg-[--primary-color] focus:outline-none"
          />
          {errors.endDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.endDate.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-4 border border-[--neutral-color] rounded-lg py-3 flex items-center justify-center gap-2 text-[--accent-color] hover:bg-[--neutral-color] transition"
      >
        <span className="text-xl">✔</span>
        Submit Batch
      </button>
    </div>
  );
}
