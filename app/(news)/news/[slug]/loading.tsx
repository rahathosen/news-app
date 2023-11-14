import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

  return (
    <div>
      <div className="flex items-center space-x-4 mx-auto">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
      <h1>news page loading</h1>
      </div>
    </div>
    </div>
  );
}
