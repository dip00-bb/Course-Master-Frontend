export default function BatchesUI() {
  return (
    <div className="max-w-2xl mx-auto bg-(--primary-color) rounded-lg shadow-md p-6 border border-(--neutral-color)">
      <h2 className="text-lg font-semibold mb-4">Batches</h2>

      {/* Batch Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-(--neutral-color) rounded-lg p-4 bg-(--primary-color)">
        
        {/* Batch Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Batch Name</label>
          <input
            type="text"
            placeholder="e.g. Fall 2024 Cohort"
            className="w-full px-3 py-2 border border-(--neutral-color) rounded-lg bg-(--primary-color) focus:outline-none"
          />
        </div>

        {/* Start Date */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-(--neutral-color) rounded-lg bg-(--primary-color) focus:outline-none"
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-(--neutral-color) rounded-lg bg-(--primary-color) focus:outline-none"
          />
        </div>
      </div>

      {/* Add Another Batch Button */}
      <button
        className="w-full mt-4 border border-(--neutral-color) rounded-lg py-3 flex items-center justify-center gap-2 text-(--accent-color) hover:bg-(--neutral-color) transition"
      >
        <span className="text-xl">＋</span>
        Add Another Batch
      </button>
    </div>
  );
}
