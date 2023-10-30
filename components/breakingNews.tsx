import Image from "next/image";
import Link from "next/link";
import RelativeDate from "@/lib/relativeDate";

export default function BreakingNews({ posts }: any) {
  return (
    <div>
      <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-lg pt-4 mb-4 pb-4">
        <main className="px-4">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full lg:w-1/3  lg:pr-2 pb-5 lg:pb-20 md:pb-20 sm:pb-20">
              {posts.allPosts.slice(0, 1).map((post: any) => (
                <div
                  key={post.id}
                  className="relative group hover-img dark:hover-img-dark  max-h-98 "
                >
                  {/*  */}
                  <Link href={`../news/${post.uniqueId}`}>
                    <Image
                      src={post.image}
                      alt={""}
                      width={640}
                      height={427}
                      className="max-w-full object-cover w-full mx-auto  max-h-[18.2rem] h-auto rounded-md "
                    />
                  </Link>
                  <div className="py-0 sm:py-1 sm:pl-0">
                    <Link href={`../news/${post.uniqueId}`}>
                      <h2 className="text-xl font-bold capitalize text-black  dark:text-gray-400 ">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-800 font-medium text-base  dark:text-gray-500 hidden sm:inline-block">
                      {post.description.slice(0, 350) + "..."}
                    </p>
                    <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                      {/* <RelativeDate date={post.date} />{" "} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Article */}
            <div className="flex-shrink max-w-full  w-full lg:w-1/2">
              <div className="box-one flex gap-2 sm:gap-0 flex-row flex-wrap">
                {posts.allPosts.slice(1, 5).map((post: any) => (
                  <article
                    key={post.id}
                    className="flex-shrink max-w-full w-full sm:w-1/2"
                  >
                    <div className="flex flex-row group hover-img dark:hover-img-dark  sm:block  max-h-18">
                      <Link href={`../news/${post.uniqueId}`}>
                        <Image
                          src={post.image}
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full object-cover w-full mx-auto max-h-[12.7rem] h-auto rounded-md"
                        />
                      </Link>
                      <div className="py-0 sm:py-1 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight text-black  dark:text-gray-400 ">
                          <Link href={`../news/${post.uniqueId}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                          {/* <RelativeDate date={post.date} />{" "} */}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            {/*Desktop Sidebar Ad  */}
            <div className=" lg:w-1/6 lg:pl-2">
              <Image
                src={
                  "https://st2.depositphotos.com/5544578/8976/v/950/depositphotos_89763874-stock-illustration-click-here-vertical-advertising-banner.jpg"
                }
                alt={""}
                width={640}
                height={427}
                className="hidden lg:block max-w-full w-full object-cover  max-h-full h-auto rounded-md"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
