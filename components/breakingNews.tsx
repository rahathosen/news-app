"use client";
import Image from "next/image";
import Link from "next/link";
import RelativeDate from "@/lib/relativeDate";
import { cn } from "@/lib/utils";
import Marquee from "@/components/reserveComponents/marquee";

const ReviewCard = ({ title, uniqueId }: any) => {
  return (
    <Link href={`../news/${uniqueId}`}>
      <figure
        className={cn(
          "relative w-max cursor-pointer overflow-hidden rounded-lg  p-3",
          // light styles
          "  hover:bg-red-800/[.5]",
          // dark styles
          "  dark:hover:bg-red-200/[.15]"
        )}
      >
        <blockquote className="mt-2 dark:text-white text-white text-base font-bold">
          {title}
        </blockquote>
      </figure>
    </Link>
  );
};

export default function BreakingNews({ breakingNews }: any) {
  return (
    <div className="">
      <div className="bg-red-600 dark:bg-red-900 rounded-md ">
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden">
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {breakingNews.breakingNews.items.map((post: any) => (
                <ReviewCard key={post.id} {...post} />
                
              ))}
            </Marquee>
            <div className=" absolute hidden lg:block  inset-y-0 left-0 w-[9%] dark:border-gray-50/[.1] dark:bg-[#040D12] rounded-md bg-[#F5F5F4]">
              <div className="flex dark:text-red-700 text-red-600  font-bold text-base items-center pt-4 pl-2">
                <p> ব্রেকিং নিউজ</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
