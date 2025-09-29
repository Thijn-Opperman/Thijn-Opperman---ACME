import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 border-b border-gray-100 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 dark:bg-gray-900/70 dark:supports-[backdrop-filter]:bg-gray-900/50 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600 hover:text-indigo-700"
            aria-label="ACME Home"
          >
            <span className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-600 text-white">
              A
            </span>
            <span>ACME</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/products" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              Products
            </Link>
            <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
