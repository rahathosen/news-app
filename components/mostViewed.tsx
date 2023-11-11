import Image from "next/image";
import Link from "next/link";

export default async function MostViewed({ categoryPosts }: any) {
  return (
    <>
      <div className="">
        <div className="p-4 bg-stone-200 dark:bg-[#071720] rounded-lg">
          <h2 className="lg:text-xl text-lg font-bold text-black dark:text-gray-400">
            Most Popular
          </h2>
        </div>
        <ul className="post-number">
          {categoryPosts.postByCategory &&
            categoryPosts.postByCategory.slice(0, 12).map((post: any) => (
              <li
                key={post.id}
                className="border-b border-gray-100 dark:border-gray-900 hover:bg-stone-300 rounded-lg dark:hover:bg-[#030b10]"
              >
                <Link
                  href={`../news/${post.uniqueId}`}
                  className="text-sm font-bold px-6 py-3 flex flex-row items-center text-gray-800 dark:text-gray-400"
                >
                  {post.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
