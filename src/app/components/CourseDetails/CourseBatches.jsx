import { formatDate } from "@/app/Utils/formatterFn";


export default function CourseBatches({ batches }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Batches</h2>
      
      {batches.length === 0 ? (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-500 font-medium">No batches available yet</p>
          <p className="text-sm text-gray-400 mt-1">Check back soon for upcoming batches</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {batches.map((batch, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border-2 border-gray-200 hover:border-(--accent-color) transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{batch.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-(--accent-color)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="font-semibold text-gray-900">{formatDate(batch.startDate)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-(--accent-color)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">End Date</p>
                    <p className="font-semibold text-gray-900">{formatDate(batch.endDate)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}