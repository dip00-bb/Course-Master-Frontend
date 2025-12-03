"use client";

import { useState } from "react";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const categories = ["Design", "Development", "Marketing"];

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="sm:hidden p-3"
                onClick={() => setOpen(true)}
            >
                <span className="icon-[tabler--menu-2] size-6 text-gray-700" />
            </button>

            {/* Sidebar UI */}
            <aside
                className={`fixed sm:static inset-y-0 left-0 z-50
        w-72 bg-white shadow-md border-r border-gray-200
        p-6 space-y-6 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Filter & Sort</h2>
                    <button className="sm:hidden" onClick={() => setOpen(false)}>
                        <span className="icon-[tabler--x] size-6 text-gray-800" />
                    </button>
                </div>

                {/* Search */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by course or instructor"
                        className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 text-sm focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="icon-[tabler--search] absolute left-3 top-2.5 text-gray-400 size-5" />
                </div>

                {/* Sort By */}
                <div>
                    <label className="block font-medium text-gray-800 mb-2">Sort by</label>
                    <select className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-500">
                        <option>Lower</option>
                        <option>Higher</option>
                        <option>All</option>
                    </select>
                </div>

                {/* Category */}
                <div>
                    <p className="font-medium text-gray-800 mb-2">Category</p>

                    <div className="space-y-2 text-sm text-gray-700">
                        {categories.map((cat) => (
                            <label key={cat} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value={cat}
                                    className="accent-blue-600"
                                />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Tags */}
                <div>
                    <p className="font-medium text-gray-800 mb-2">Tags</p>

                    <div className="flex flex-wrap gap-2">
                        {["UI/UX", "React", "Node.js", "SEO", "Figma"].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm border border-gray-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 sm:hidden"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}
