import Link from "next/link";
import { sixtyfour } from "./fonts";

export default function notFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950"
      ></div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="mx-auto max-w-7xl">
          <div
            className={`${sixtyfour.className} text-9xl mt-40 mb-8 font-bold`}
          >
            404
          </div>
          <p className="text-gray-600">
            The page you are looking for does not exist.
          </p>
          <p className="cursor-pointer pt-4 text-indigo-600">
            <Link href="/">Go back to the homepage...</Link>
          </p>
        </div>
      </main>
    </section>
  );
}
