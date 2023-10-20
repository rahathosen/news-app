import Image from "next/image";
import Link from "next/link";

export default function Category({ allpost }: any) {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      {/* divider */}
      <div>
        <div className="">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full overflow-hidden">
              <div className="flex flex-row flex-wrap ">
                {allpost.allPosts.map((post: any) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-2 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                  >
                    <div className="flex flex-row sm:block hover-img max-h-18">
                      <Link href={`../news/${post.uniqueId}`}>
                        <Image
                          src={post.image}
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full aspect-[3/4] object-cover w-full mx-auto max-h-[12.7rem] rounded-md"
                        />
                      </Link>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-gray-400">
                          <Link href={`../news/${post.uniqueId}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="hidden md:block text-gray-800 dark:text-gray-400 leading-tight mb-1">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: post.description.slice(0, 100) + "...",
                            }}
                          ></div>
                          {/* {post.details.slice(0, 100) + "..."} */}
                        </p>
                        {/* <a
                          className="text-gray-800 font-medium dark:text-gray-400"
                          href="#"
                        >
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                          {post.tag}
                        </a> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
