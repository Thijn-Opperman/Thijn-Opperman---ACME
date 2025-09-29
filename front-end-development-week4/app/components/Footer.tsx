import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white/80 border-b border-gray-100 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 dark:bg-gray-900/70 dark:supports-[backdrop-filter]:bg-gray-900/50 dark:border-gray-800">
      <div className="mx-auto border-t border-gray-100 dark:border-gray-800 max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 dark:text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; ACME - {currentYear}. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Home
          </Link>
          <Link href="/products" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Products
          </Link>
          <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
