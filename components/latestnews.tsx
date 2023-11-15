import Image from "next/image";
import Link from "next/link";

export default async function LatestNws({ categoryPosts,catpost }: any) {

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  console.log(catpost)

  return (
    <>
      <div>
        <div className="">
          {categoryPosts.postByCategory &&
            categoryPosts.postByCategory.slice(0, 10).map((post: any) => (
              <div key={post.id} className="col-span-1 flex rounded-md shadow-sm py-2">
                <div
                  className={classNames(
                    "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                  )}
                >
                  <Link href={`../news/${post.uniqueId}`}>
                    <Image
                      src={post.image}
                      alt=""
                      width={200}
                      height={160}
                      className="mx-auto object-cover h-16 w-16 rounded-md"
                    />
                  </Link>
                </div>
                <div className="flex flex-1 items-center justify-between  ">
                  <div className="flex-1  px-4 py-2 text-sm">
                  <Link href={`../news/${post.uniqueId}`}
                      className="font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
                    >
                      {post.title}
                    </Link>
                    <p className="text-gray-500"> 
                    <Link  href={`/category/${post.category.uniqueId}`}>
                    {post.category.title} / 
                    </Link>
                    {" "}
                    <Link  href={`/category/${post.category.uniqueId}/${post.subcategory.uniqueId}`}>
                    {post.subcategory.title}
                    </Link>
                      </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
