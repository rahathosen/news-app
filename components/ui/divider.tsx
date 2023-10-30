"use client";
import Link from "next/link";
export default function Divider({ categoryTitle, categoryId }: any) {
  return (
    <div className="relative px-4 py-4 bg-stone-100 dark:bg-[#040D12] ">
      <div className="relative flex items-center justify-between">
        <h2 className="text-black dark:text-gray-400 lg:text-3xl text-xl font-bold">
          <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
          {categoryTitle}
        </h2>
        <Link
           href={`/category/${categoryId}`}
          className="inline-flex items-center gap-x-1.5 rounded-full  px-3 text-sm lg:text-base font-semibold text-gray-900 "
        >
          <div className="group text-black dark:text-gray-400 hover:text-[#5C8374] dark:hover:text-[#5C8374]  transition ease-in-out duration-200">
            See more{" "}
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              →
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
