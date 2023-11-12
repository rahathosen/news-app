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
          "relative w-max  cursor-pointer overflow-hidden rounded-lg  p-3",
          // light styles
          "  hover:bg-gray-950/[.05]",
          // dark styles
          "  dark:hover:bg-gray-200/[.15]"
        )}
      >
        <blockquote className="mt-2 dark:text-white text-black text-sm font-bold">
          {title}
        </blockquote>
      </figure>
    </Link>
  );
};

export default async function HeadlineNews({ headLineNews }: any) {
  return (
    <div>
      <div className="bg-stone-100 dark:bg-[#040D12] mt-2  rounded-md ">
        <main className="">
          <div className="relative flex h-full w-full flex-col text-center items-center justify-center  overflow-hidden  ">
            <Marquee pauseOnHover className="[--duration:20s]">
              {headLineNews.headLine.headlines.map((post: any) => (
                <ReviewCard key={post.id} {...post} />
              ))}
            </Marquee>
            <div className=" absolute hidden lg:block  inset-y-0 left-0 w-[7%] rounded-md dark:border-gray-50/[.1] dark:bg-[#040D12] bg-[#F5F5F4]">
              <div className="flex dark:text-gray-400 text-black font-semibold text-sm items-center pt-4  pl-2 ">
                <p>শিরোনাম</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
