export default function Button({ children, onClick, className = "", variant = "primary" }) {
  const variants = {
    primary: "bg-[var(--accent-color)] text-[var(--primary-color)] hover:opacity-90 hover:shadow-lg hover:shadow-[var(--accent-color)]/25",
    secondary: "bg-[var(--neutral-color)] text-gray-700 border-2 border-gray-200 hover:border-gray-300"
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}