import Image from "next/image";
import Link from "next/link";

import { poppins } from "../fonts";

import { productType } from "../../types/product";
import { truncate, formatPrice } from "../../_lib/scripts";

export default async function ProductsPage() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = (await response.json()) as productType[];

  return (
    <section className="relative overflow-hidden">
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
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Browse our collection of products
          </h1>
        </header>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: productType) => (
            <article
              key={product.id}
              className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col dark:bg-gray-900 dark:border-gray-800"
            >
              <div className="h-40 grid place-items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={80}
                  height={80}
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h2 className={`${poppins.className} font-semibold text-lg`}>
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {truncate(product.description, 100)}
                </p>
                <div className="mt-auto text-sm font-bold mb-2">
                  € {formatPrice(product.price)}
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
                >
                  View
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
}
