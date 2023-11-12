"use client"
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

  return (
    <div>
      <div className="flex items-center space-x-4 mx-auto">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-20 w-[500px]" />
        <Skeleton className="h-20 w-[500px]" />
      </div>
    </div>
    </div>
  );
}
