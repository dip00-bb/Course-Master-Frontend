export default function Footer() {
  return (
    <footer className="bg-(--primary-color) border-t border-(--neutral-color) mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Logo / Brand */}
        <div className="text-lg font-semibold text-(--accent-color)">
          Course Master
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm">
          <a href="/about" className="hover:text-(--accent-color) transition">About</a>
          <a href="/courses" className="hover:text-(--accent-color) transition">Courses</a>
          <a href="/contact" className="hover:text-(--accent-color) transition">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm opacity-70 text-center sm:text-right">
          © {new Date().getFullYear()} Course Master. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
