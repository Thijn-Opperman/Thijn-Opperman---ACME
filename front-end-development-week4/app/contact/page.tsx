export default function Contact() {
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
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold">Contact</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-prose">
            Fill in the form and we’ll get back to you within one business day.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <form className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm space-y-4 dark:bg-gray-900 dark:border-gray-800">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border-gray-100 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border-gray-100 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium dark:text-gray-300"
                >
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="mt-1 w-full rounded-xl border-gray-100 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                >
                  <option>Question</option>
                  <option>Quote</option>
                  <option>Support</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-1 w-full rounded-xl border-gray-100 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700"
              >
                Send
              </button>
            </form>
          </section>

          <aside className="space-y-4">
            <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm dark:bg-gray-900 dark:border-gray-800">
              <h2 className="font-semibold dark:text-white">Company info</h2>
              <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Address:</strong> 123 Fiction Street, 1234 AB, Utrecht
                </li>
                <li>
                  <strong>Phone:</strong> +31 10 123 45 67
                </li>
                <li>
                  <strong>Email:</strong> hello@acme.test
                </li>
                <li>
                  <strong>Chamber of Commerce:</strong> 00000000
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm dark:bg-gray-900 dark:border-gray-800">
              <h2 className="font-semibold dark:text-white">Opening hours</h2>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                Mon–Fri: 9:00–17:00
                <br />
                Sat–Sun: Closed
              </p>
            </div>
          </aside>
        </div>
      </main>
    </section>
  );
}
