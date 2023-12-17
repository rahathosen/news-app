import RelativeDate from "@/lib/relativeDate";
import Image from "next/image";
import Link from "next/link";
import {
  websiteInfoGQL,
} from "@/lib/getGQL";


export default async function LatestNws({ categoryPosts }: any) {
  const webInfo = await websiteInfoGQL();
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div>
        <div className="">
          {categoryPosts.postByCategory &&
            categoryPosts.postByCategory.slice(0, 10).map((post: any) => (
              <div key={post.uniqueId} className="col-span-1 flex rounded-md shadow-sm py-2">
                <div
                  className={classNames(
                    "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                  )}
                >
                  <Link href={`../news/${post.uniqueId}`}>
                    <Image
                      src={post.image || webInfo.websiteInfo.newsThumbnail}
                      alt={post.title}
                      width={200}
                      height={160}
                      className="mx-auto object-cover h-16 w-16 rounded-md"
                    />
                  </Link>
                </div>
                <div className="flex flex-1 items-center justify-between  ">
                  <div className="flex-1  px-4 py-2 text-sm">
                    <Link
                 href={`/category/${post.category.uniqueId}/${post.subcategory.uniqueId}`}
                  className=" text-red-600 hover:text-red-900 font-semibold"
                >
                  {post.subcategory.title}{"/ "}
                </Link>
                  <Link href={`../news/${post.uniqueId}`}
                      className="font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
                    >
                      {post.title}
                    </Link>
                    <div className="text-gray-500 text-xs"> 
                    <RelativeDate date={post.createdAt} />{" "}
                      </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
