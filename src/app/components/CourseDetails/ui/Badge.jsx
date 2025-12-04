export default function Badge({ children, variant = "primary" }) {
  const variants = {
    primary: "bg-[var(--accent-color)]/10 text-[var(--accent-color)] border border-[var(--accent-color)]/20",
    secondary: "bg-[var(--neutral-color)] text-gray-700 border border-gray-200"
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide ${variants[variant]}`}>
      {children}
    </span>
  );
}
