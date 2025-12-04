"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { fetchAsyncCoursesByQuery } from "@/app/lib/features/courses/coursesSlice";
import { useAppDispatch } from "@/app/lib/hooks";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();

    const categories = ["design", "data science", "programming", "marketing", "business"];
    const tagsList = ["beginner", "advanced", "project based", "certificate", "popular"];

    const { register, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            search: "",
            sort: "all",
            category: "",
            tags: [],
        }
    });


    const onSubmit = (data) => {
        console.log(data)
        dispatch(fetchAsyncCoursesByQuery(data));
    };

    const onReset = () => {
        reset();
        dispatch(fetchAsyncCoursesByQuery({}));
    };

    return (
        <>

            <button
                className="sm:hidden p-3"
                onClick={() => setOpen(true)}
            >
                <span className="icon-[tabler--menu-2] size-6 text-gray-700" />
            </button>


            <aside
                className={`fixed sm:static inset-y-0 left-0 z-50
          w-72 bg-white shadow-md border-r border-gray-200
          p-6 space-y-6 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
            >

                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Filter & Sort</h2>
                    <button className="sm:hidden" onClick={() => setOpen(false)}>
                        <span className="icon-[tabler--x] size-6 text-gray-800" />
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by course or instructor"
                            {...register("search")}
                            className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="icon-[tabler--search] absolute left-3 top-2.5 text-gray-400 size-5" />
                    </div>

                    <div>
                        <label className="block font-medium text-gray-800 mb-2">Sort by</label>
                        <select
                            {...register("sort")}
                            className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="all">All</option>
                            <option value="price_asc">Lower Price</option>
                            <option value="price_desc">Higher Price</option>
                        </select>
                    </div>

                    <div>
                        <p className="font-medium text-gray-800 mb-2">Category</p>
                        <div className="space-y-2 text-sm text-gray-700">
                            {categories.map((cat) => (
                                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        value={cat}
                                        {...register("category")}
                                        className="accent-blue-600"
                                    />
                                    {cat.toUpperCase()}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="font-medium text-gray-800 mb-2">Tags</p>
                        <div className="flex flex-wrap gap-2">
                            {tagsList.map((tag) => (
                                <label
                                    key={tag}
                                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm border border-gray-200 cursor-pointer select-none"
                                >
                                    <input
                                        type="checkbox"
                                        value={tag}
                                        {...register("tags")}
                                        className="accent-blue-600"
                                    />
                                    {tag.toUpperCase()}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between gap-4 mt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                        >
                            Apply
                        </button>
                        <button
                            type="button"
                            onClick={onReset}
                            className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </aside>


            {open && (
                <div
                    className="fixed inset-0 bg-black/40 sm:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}
