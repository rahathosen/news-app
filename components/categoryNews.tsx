import Link from "next/link";
import Image from "next/image";
import DropdownSelect from "./dropdownSelect";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const imagurl =
  "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

export default function CategoryNews() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      <div className="mx-auto px-4">
      <div className="relative flex items-center justify-between pb-4">
        <h2 className="text-black dark:text-gray-400 lg:text-3xl text-xl font-bold">
          <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
          অপরাধ
        </h2>
        <Link
          href={`/category/`}
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
        {/* 2 part */}
        <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-8 xl:gap-x-2">
          {/* part one */}
          <div className="col-span-5">
            {/* 4 part */}
            <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:grid-rows-2 sm:gap-x-2 lg:gap-2">
              <div className="group  overflow-hidden rounded-lg sm:col-span-2 sm:row-span-2">
                <Image
                  src={imagurl}
                  alt={""}
                  width={640}
                  height={427}
                  className="object-cover object-center max-w-full w-full mx-auto rounded-md"
                />

                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50"
                />
              </div>
              <div className="group  overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <Image
                  src={imagurl}
                  alt={""}
                  width={640}
                  height={427}
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />

                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
              </div>
              <div className="group a overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <Image
                  src={imagurl}
                  alt={""}
                  width={640}
                  height={427}
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
              </div>
            </div>
            <div className="flex flex-wrap pt-2">
              {Array(4)
                .fill(null)
                .map((_, index: any) => (
                  <div
                    key={index}
                    className="flex-shrink max-w-full w-full sm:w-1/4 px-1  sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                  >
                    <div className="flex flex-row sm:block hover-img">
                      <Link href={`../news/`}>
                        <Image
                          src={imagurl}
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full w-full mx-auto rounded-md"
                        />
                      </Link>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight text-black  dark:text-gray-400 mb-2">
                          <Link href={`../news/`}>
                            tilfjke kjkfeljk eklfjek jef
                          </Link>
                        </h3>
                        <p className="hidden md:block  dark:text-gray-400 text-gray-800 leading-tight mb-1">
                          {/* {post.description.slice(0, 100) + "..."} */}
                        </p>
                        <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                          {/* <RelativeDate date={post.createdAt} />{" "} */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <Image
                src={imagurl}
                alt={""}
                width={640}
                height={427}
                className="max-w-full w-full h-10 mx-auto rounded-md pt-4"
              />
            </div>
          </div>
          {/* part two */}
          <div className="col-span-3">
            <Tabs defaultValue="lastnews" className="w-full">
              <TabsList>
                <TabsTrigger value="lastnews">সর্বশেষ</TabsTrigger>
                <TabsTrigger value="mostpopular">সর্বাধিক পঠিত</TabsTrigger>
              </TabsList>
              <TabsContent value="lastnews">latest news</TabsContent>
              <TabsContent value="mostpopular">oldest news</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
