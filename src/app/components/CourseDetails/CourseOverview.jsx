export default function CourseOverview({ course }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
        <p className="text-gray-700 leading-relaxed">
          Master {course.title} with expert instructor {course.instructorName}. 
          This comprehensive course covers everything you need to become proficient 
          in {course.category}. With {course.syllabus.length} modules and hands-on projects, 
          you&apos;ll gain practical skills that are immediately applicable.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">What You&apos;ll Learn</h3>
        <ul className="space-y-2">
          {course.syllabus.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-(--accent-color) mt-0.5 shrink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Course Features</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-(--neutral-color)">
            <div className="w-10 h-10 rounded-full bg-(--accent-color)/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-(--accent-color)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Video Lessons</p>
              <p className="text-sm text-gray-600">HD quality content</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-lg bg-(--neutral-color)">
            <div className="w-10 h-10 rounded-full bg-(--accent-color)/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-(--accent-color)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Assignments</p>
              <p className="text-sm text-gray-600">Practical exercises</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
