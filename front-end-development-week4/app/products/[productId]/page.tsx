import Image from "next/image";
import Link from "next/link";
import { productType } from "../../../types/product";
import { formatPrice } from "../../../_lib/scripts";
import NoProduct from "@/app/components/NoProduct";
import { PiLessThan } from "react-icons/pi";

export default async function ProductDetailPage({
  params,
}: {
  // In the App Router, params is a plain object; no Promise wrapper needed.
  params: { productId: string };
}) {
  const { productId } = await params;
  const id = Number(productId);

  // Minimal validation: handle missing/invalid ids with a simple message
  if (!Number.isFinite(id) || id <= 0) {
    return <NoProduct issue="The provided url has an invalid format." />;
  }

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  // If API says not found, show a simple fallback
  if (!response.ok) {
    return <NoProduct issue="We were seaching in the wrong catalog." />;
  }

  let product: productType | null = null;
  try {
    product = (await response.json()) as productType;
  } catch {
    return <NoProduct issue="Our catalog does not contain this product." />;
  }

  if (!product) {
    return <NoProduct issue="Our catalog does not contain this product." />;
  }

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
        {/* Breadcrumbs */}
        <nav
          className="mb-6 text-sm text-gray-600 dark:text-gray-300"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/products"
                className="inline-flex items-center gap-1 hover:underline text-indigo-600"
              >
                <PiLessThan />
                Back to products
              </Link>
            </li>
          </ol>
        </nav>

        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Product Details
          </h1>
        </header>

        {/* Card */}
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
            {/* Media */}
            <div className="relative">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-b from-white to-gray-50 p-6 dark:from-gray-900 dark:to-gray-950">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="flex min-w-0 h-full flex-col">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-gray-100">
                {product.title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {product.description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                <div className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                  € {formatPrice(product.price)}
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href=""
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  >
                    Add to cart
                  </Link>
                  <Link
                    href={`/products`}
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                  >
                    Keep browsing
                  </Link>
                </div>
              </div>

              <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                  <dt className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    SKU
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                    #{product.id}
                  </dd>
                </div>
                <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                  <dt className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Availability
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    In stock
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}
