import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const pages = [
//   { name: 'Home', href: '#', current: false },
  { name: 'News', href: '/news', current: true },
]

export default function Breadcrumb() {
  return (
    <nav className="flex border-b xl:container mx-auto px-3 sm:px-4 xl:px-2 mb-4 border-white dark:border-[#071720] bg-stone-100 dark:bg-[#040D12] " aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-4 mb-4 px-4 sm:px-6 lg:px-8">
        <li className="flex">
          <div className="flex items-center">
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
            <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300 dark:text-[#071720]"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
            {/* <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-300 dark:text-[#071720]" aria-hidden="true" /> */}
              <Link
                href={page.href}
                className="ml-4 text-lg font-bold text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
