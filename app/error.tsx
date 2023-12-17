"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ResetIcon, ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const router = useRouter();
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] my-2 rounded-t-lg pt-4">
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <Button className="my-6" type="button" onClick={() => router.back()}>
        <ResetIcon className="mr-2 h-4 w-4" />  Back To Previus
        </Button>
        <div className="text-center">
          <p className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-400">
            Something Wrong! Come Back Later
          </p>
          <Button className="my-6"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
         <ReloadIcon className="mr-2 h-4 w-4" />   Try again
          </Button>
        </div>
      </main>
    </div>
  );
}
