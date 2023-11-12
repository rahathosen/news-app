import Image from "next/image";
import Link from "next/link";

export default async function RelatedNews({ categoryPosts }: any) {
  return (
    <>
      <div className="p-4 mb-4 bg-stone-200 dark:bg-[#071720] rounded-lg">
        <h2 className="lg:text-xl text-lg font-bold text-black dark:text-gray-400">
          Related News
        </h2>
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="flex-shrink max-w-full w-full overflow-hidden">
          <div className="flex flex-row flex-wrap -mx-3">
            {categoryPosts.postByCategory &&
              categoryPosts.postByCategory.slice(0, 5).map((post: any) => (
                <div
                  key={post.id}
                  className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-full px-3 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                >
                  <div className="flex flex-row sm:block hover-img">
                    <Link href={`../news/${post.uniqueId}`}>
                      <Image
                        src={post.image}
                        alt={""}
                        width={640}
                        height={427}
                        className="max-w-full w-full mx-auto rounded-md"
                      />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2 text-black dark:text-gray-400">
                        <Link href={`../news/${post.uniqueId}`}>
                          {post.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
