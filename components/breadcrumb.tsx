import {
  HomeIcon,
  ChevronRightIcon,
  ShareIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const pages = [
  //   { name: 'Home', href: '#', current: false },
  { name: "News", href: "/news", current: true },
];

export default function Breadcrumb({ post }: any) {
  return (
    <nav
      className="flex justify-between border-b xl:container mx-auto px-3 sm:px-4 xl:px-2 mb-4 border-stone-200 dark:border-[#071720] bg-white dark:bg-[#040D12] "
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="mx-auto flex w-full max-w-screen-xl space-x-4 mb-4 px-4 sm:px-6 lg:px-8"
      >
        <li className="flex">
          <div className=" flex items-center">
            <Link
              href="/"
              className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700"
            >
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>

        <li className="flex">
          <div className="flex items-center">
          <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-600 dark:text-gray-600"
                aria-hidden="true"
              />
            <Link
              href={`/category/${post.category.uniqueId}`}
              className="pl-4 text-lg font-bold text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700"
            >
              {post.category.title}
            </Link>
          </div>
          <div className="pl-4 flex items-center">
          <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-600 dark:text-gray-600"
                aria-hidden="true"
              />
            <Link
              href={`/category/${post.category.uniqueId}/${post.subcategory.uniqueId}`}
              className="ml-4 text-lg font-bold text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700"
            >
              {post.subcategory.title}
            </Link>
          </div>
        </li>
      </ol>
      <div className="lg:pr-6 pr-4">
        <ShareIcon className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700" />
      </div>
    </nav>
  );
}
