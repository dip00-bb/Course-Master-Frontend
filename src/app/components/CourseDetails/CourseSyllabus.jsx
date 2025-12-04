export default function CourseSyllabus({ syllabus }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Syllabus</h2>
      
      <div className="space-y-3">
        {syllabus.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-xl border-2 border-gray-200 hover:border-(--accent-color) transition-colors"
          >
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-(--accent-color) text-(--primary-color) flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}