import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden flex-1">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-950 dark:to-black"
      />
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/10"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl dark:bg-fuchsia-500/10"
      />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Smart solutions,
              <br />
              <span className="text-indigo-600">zero hassle</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-prose">
              ACME is a fictional company that delivers real clarity. Sharp
              products, friendly service, and no fuss. Explore our lineup or get
              in touch.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="/products"
                className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
              >
                Browse products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl border border-gray-200 px-5 py-3 font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 dark:text-white"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              className="rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm aspect-[4/3] w-full"
              src="/shop.jpg"
              alt="Shop"
              width={800}
              height={600}
              style={{ width: "auto", height: "auto" }}
              priority
            />
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Illustration — ACME stands for reliable, modern products.
            </p>
          </div>
        </div>

        <section className="py-14 bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-semibold">Simple</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  Clear solutions that work right away—no thick manuals.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-semibold">Scalable</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  Grow without friction—from startup to enterprise.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                {" "}
                <h3 className="text-lg font-semibold">Support</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  Real people. Real answers. During business hours.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                {" "}
                <h3 className="text-lg font-semibold">Open</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  Transparent pricing and APIs that speak human.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
