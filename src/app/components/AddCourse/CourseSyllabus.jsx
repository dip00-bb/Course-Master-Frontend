import { useFormContext, useFieldArray } from "react-hook-form";

export default function SyllabusInput() {
  const { control, register } = useFormContext();

  const { fields, append } = useFieldArray({
    control,
    name: "syllabus",
  });

  return (
    <div className="flex flex-col gap-4 rounded-lg shadow-md bg-(--primary-color) p-6">
      <h3 className="font-semibold text-lg">Course Syllabus</h3>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="border border-(--neutral-color) rounded-xl p-4 bg-(--primary-color) flex flex-col gap-3"
        >
          {/* Module Title */}
          <input
            {...register(`syllabus.${index}.title`)}
            className="border border-(--neutral-color) rounded-lg p-2 bg-(--primary-color)"
            placeholder={`Module ${index + 1} title`}
          />

          {/* Module Description */}
          <textarea
            {...register(`syllabus.${index}.description`)}
            className="border border-(--neutral-color) rounded-lg p-2 bg-(--primary-color) h-24"
            placeholder="Module description / topics..."
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ title: "", description: "" })}
        className="px-4 py-2 rounded-lg bg-(--accent-color) text-(--primary-color) text-sm font-medium w-fit"
      >
        + Add Module
      </button>
    </div>
  );
}
