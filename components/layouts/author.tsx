import Image from "next/image";
import Link from "next/link";

export default function Author({ post }: any) {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-stone-200 dark:bg-[#071720] shadow mb-4">
        <div className="bg-stone-200 dark:bg-[#071720] p-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <Image
                  className="mx-auto object-cover h-16 w-16 rounded-full"
                  src={post.reportedBy.image}
                  alt=""
                  width={40}
                  height={20}
                />
              </div>
              <div className="mt-0 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <Link href={`../author/${post.reportedBy.uniqueId}`}>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-400 sm:text-2xl">
                    {post.reportedBy.name}
                  </p>
                </Link>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-600">
                  {post.reportedBy.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap py-6 items-center justify-center lg:justify-between   border-t dark:border-[#040D12] border-gray-50 bg-stone-200 dark:bg-[#071720] ">
          <div className="px-6 item-center lg:pb-2 sm:pb-0 pb-2  text-sm font-medium">
            <span className="text-gray-600 dark:text-gray-600">
              <span className="font-bold dark:text-gray-500">Published:</span>{" "}
              {post.reportedBy.createdAt}
            </span>
          </div>
          <div className="px-6  text-sm font-medium">
            <span className="text-gray-600 dark:text-gray-600">
              <span className="font-bold dark:text-gray-500">Updated:</span>{" "}
              {post.reportedBy.updatedAt}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
