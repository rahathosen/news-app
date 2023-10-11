import Image from "next/image";
import Link from "next/link";
import Divider from "./ui/divider";
import RelativeDate from "@/lib/relativeDate";

async function getData() {
  const res = await fetch("https://www.dailyudayan.com/api/content", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

interface Post {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
}

export default async function SecondSection() {
  const posts = await getData();
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      <Divider />
      <div className="px-4">
        <div>
          <div className="flex flex-row flex-wrap">
            {/* <!-- Left --> */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div className="flex flex-row flex-wrap -mx-3">
                {posts.slice(0, 1).map((post: Post) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full px-3 pb-5"
                  >
                    <div className="relative hover-img dark:hover-img-dark max-h-98 ">
                      {/* <!--thumbnail--> */}
                      <Link href="#">
                        <Image
                          src={post.imageUrl}
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full w-full mx-auto h-auto max-h-[18.2rem] pb-2 object-cover rounded-md"
                        />
                      </Link>
                      <div className="">
                        {/* <!--title--> */}
                        <Link href="#">
                          <h2 className="text-2xl font-bold capitalize text-black  dark:text-gray-400 ">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-gray-800 font-medium text-base  dark:text-gray-500  hidden sm:inline-block">
                          {post.description}
                        </p>
                        {/* <!-- author and date --> */}
                        <div className="">
                          <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                            <RelativeDate date={post.date} />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {posts.slice(1, 7).map((post: Post) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                  >
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <Image
                          src={post.imageUrl}
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full w-full mx-auto rounded-md"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight text-black  dark:text-gray-400 mb-2">
                          <a href="#">{post.title}</a>
                        </h3>
                        <p className="hidden md:block  dark:text-gray-400 text-gray-800 leading-tight mb-1">
                          {post.description}
                        </p>
                        <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                          <RelativeDate date={post.date} />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 order-first lg:order-last">
              <div className="w-full bg-stone-100 dark:bg-[#040D12] ">
                <div className="mb-6">
                  <div className="p-4 bg-stone-200 dark:bg-[#071720] rounded-lg">
                    <h2 className="lg:text-xl text-lg font-bold text-black dark:text-gray-400">
                      Most Popular
                    </h2>
                  </div>
                  <ul className="post-number">
                    {posts.slice(0, 12).map((post: Post) => (
                      <li
                        key={post.id}
                        className="border-b border-gray-100 dark:border-gray-900 hover:bg-stone-300 rounded-lg dark:hover:bg-[#030b10]"
                      >
                        <Link
                          className="text-lg font-bold pl-2 py-3 flex flex-row items-center text-gray-800 dark:text-gray-400"
                          href="#"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
