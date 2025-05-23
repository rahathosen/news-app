import Link from "next/link";
export default function NotFound() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 rounded-t-lg pt-4 ">
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-400">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-900 dark:text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-900 dark:text-gray-400"
            >
              <span aria-hidden="true">&larr;</span>
              {"  "} Back To Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
