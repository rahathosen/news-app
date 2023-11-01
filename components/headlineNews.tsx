import Image from "next/image";
import Link from "next/link";
import RelativeDate from "@/lib/relativeDate";
import { cn } from "@/lib/utils";
import Marquee from "@/components/reserveComponents/marquee";

const ReviewCard = ({ title, uniqueId }: any) => {
  return (
    <figure
      className={cn(
        "relative w-max  cursor-pointer overflow-hidden rounded-lg  p-3",
        // light styles
        " bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        " dark:bg-gray-600/[.10] dark:hover:bg-gray-200/[.15]"
      )}
    >
      <Link href={`../news/${uniqueId}`}>
        <blockquote className="mt-2 dark:text-gray-400 text-gray-600 text-sm font-bold">
          {title}
        </blockquote>
      </Link>
    </figure>
  );
};

export default async function HeadlineNews({ headLineNews }: any) {
  return (
    <div>
      <div className="bg-stone-100 dark:bg-[#040D12] mt-2  rounded-b-lg rounded-lg pt-2 mb-2 pb-2">
        <main className="px-4">
          <div className="relative flex h-full w-full flex-col text-center items-center justify-center  overflow-hidden  ">
            <Marquee pauseOnHover className="[--duration:20s]">
              {headLineNews.headLines.headlines.map((post: any) => (
                <ReviewCard key={post.id} {...post} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute hidden lg:block  inset-y-0 left-0 w-1/12 dark:border-gray-50/[.1] dark:bg-[#040D12] bg-[#F5F5F4]">
              <div className="flex dark:text-gray-400 text-gray-600 font-semibold text-sm items-center pt-6">
                <p>শিরোনাম</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
