"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="bg-stone-100 dark:bg-[#040D12] my-2 rounded-t-lg pt-4">
          <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-400">
                Global Server Under Maintenance, Come Back Again Soon
              </p>
              <button onClick={() => reset()}>Try again</button>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
