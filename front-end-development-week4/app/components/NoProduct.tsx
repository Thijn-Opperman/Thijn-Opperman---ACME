import Link from "next/link";
import { sixtyfour } from "../fonts";

export default function NoProduct({ issue }: { issue: string }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950"
      ></div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="mx-auto max-w-7xl">
          <h1
            className={`${sixtyfour.className} text-center text-9xl mt-40 mb-8 font-bold`}
          >
            Oeps
          </h1>
          <p className="text-gray-600">Product not found: {issue}</p>
          <p className="cursor-pointer text-center pt-4 text-indigo-600">
            <Link href="/products">Back to all products</Link>
          </p>
        </div>
      </main>
    </section>
  );
}
