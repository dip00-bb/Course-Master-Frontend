import Link from "next/link";
import { useState } from "react";

export default function DropdownMenu({ label, icon, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-(--neutral-color) transition-all"
      >
        <div className="flex items-center gap-3">
          <span className={`${icon} size-5`} />
          <span>{label}</span>
        </div>
        <span
          className={`icon-[tabler--chevron-down] size-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="pl-10 mt-1 space-y-1">
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg
              hover:bg-(--neutral-color)"
            >
              <span className={`${item.icon} size-4`} />
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
