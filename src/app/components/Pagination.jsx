"use client";

import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { getCoursesMeta, fetchAsyncCoursesByQuery } from "@/app/lib/features/courses/coursesSlice";
import { useSearchParams } from "next/navigation";

export default function Pagination() {
  const dispatch = useAppDispatch();
  const meta = useAppSelector(getCoursesMeta);
  const searchParams = useSearchParams();
  
  const { page = 1, totalPages = 0, total = 0 } = meta;

  const getCurrentFilters = () => {
    return {
      search: searchParams.get('search') || '',
      sort: searchParams.get('sort') || 'all',
      category: searchParams.get('category') || '',
      tags: searchParams.get('tags') || '',
      limit: Number(searchParams.get('limit')) || 10
    };
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    
    const filters = getCurrentFilters();
    dispatch(fetchAsyncCoursesByQuery({ ...filters, page: newPage }));
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't show pagination if there are no pages
  if (totalPages <= 1) return null;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate range around current page
      let start = Math.max(2, page - 1);
      let end = Math.min(totalPages - 1, page + 1);
      
      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push('...');
      }
      
      // Add pages around current page
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col items-center gap-4 px-4 py-6">
      {/* Results info */}
      <div className="text-sm text-gray-600">
        Showing page {page} of {totalPages} ({total} total results)
      </div>
      
      <nav
        aria-label="Pagination"
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
      >
        {/* Previous */}
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={`relative inline-flex items-center rounded-l-md px-2 py-2 ${
            page === 1
              ? 'text-gray-300 cursor-not-allowed bg-gray-100'
              : 'text-gray-700 hover:bg-gray-50 cursor-pointer'
          } ring-1 ring-inset ring-gray-300`}
        >
          <span className="sr-only">Previous</span>
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            />
          </svg>
        </button>

        {/* Page numbers */}
        {pageNumbers.map((pageNum, index) => {
          if (pageNum === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300"
              >
                ...
              </span>
            );
          }
          
          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                page === pageNum
                  ? 'z-10 bg-blue-600 text-white focus:z-20'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${
            page === totalPages
              ? 'text-gray-300 cursor-not-allowed bg-gray-100'
              : 'text-gray-700 hover:bg-gray-50 cursor-pointer'
          } ring-1 ring-inset ring-gray-300`}
        >
          <span className="sr-only">Next</span>
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}