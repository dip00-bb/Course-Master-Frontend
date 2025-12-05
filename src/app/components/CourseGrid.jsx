import Image from "next/image";
import Link from "next/link";

export default function CoursesGrid({ courses,gridCol}) {
  
  return (
    <div className="w-full p-4 rounded-2xl">
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}>
        {courses?.map((course) => (
          <div
            key={course._id}
            className="border border-(--neutral-color) rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
              <Image
                src={course.thumbnail}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mt-3">{course.title}</h2>

            {/* Instructor */}
            <p className="text-sm mt-1">{course.instructorName}</p>

            {/* Category */}
            <p className="text-sm mt-1">Category: {course.category}</p>

            {/* Price */}
            <p className="font-semibold mt-2">${course.price}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mt-3">
              {course.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-md bg-(--neutral-color)"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Syllabus Count */}
            <p className="text-sm mt-2">
              Syllabus: {course.syllabus?.length} modules
            </p>

            {/* Button */}
            <Link href={`course-details/${course._id}`} className="mt-4 w-full py-2 rounded-md bg-(--accent-color) text-(--primary-color) font-medium cursor-pointer block text-center">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
