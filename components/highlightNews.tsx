import Link from "next/link";
import Image from "next/image";
import DropdownSelect from "./dropdownSelect";
const posts = [
  {
    id: 1,
    title: "Govt move to check prices falls flat, Govt move to check prices falls flat",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  },
  {
    id: 2,
    title: "BBS data lays bare devastating impact of Covid-19",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  },
  {
    id: 3,
    title: "Govt move to check prices falls flat",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  },
  {
    id: 4,
    title: "BBS data lays bare devastating impact of Covid-19",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  },
  {
    id: 5,
    title: "BBS data lays bare devastating impact of Covid-19",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  },
  {
    id: 6,
    title: "Liquidity stress at Islamic banks shows no sign of abating",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  },
  // More posts...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HighlightNews() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-9 xl:gap-x-2">
          <div className="col-span-4">
            {posts.slice(0, 1).map((post) => (
              <article
                key={post.id}
                className="flex flex-col "
              >
                <h3 className="mb-3 text-2xl font-semibold leading-6 text-black dark:text-white  group-hover:text-gray-600 dark:group-hover:text-gray-500">
                  <a href={post.href}>
                    <span  />
                    {post.title}
                  </a>
                </h3>
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={post.datetime}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative rounded-full bg-white dark:bg-[#0c2525f8] dark:text-gray-400 px-3 py-1.5 font-medium text-gray-60  hover:bg-gray-100"
                  >
                    {post.category.title} / Sports
                  </a>
                </div>
                <div className="group relative">
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400 ">
                    {post.description}
                  </p>
                </div>
                <div className=" mt-3 flex items-center">
                  <Image
                    src={post.author.imageUrl}
                    alt={""}
                    width={640}
                    height={427}
                    className="max-w-full w-full mx-auto rounded-md bg-gray-50"
                  />
                </div>
                <p className="mt-4  text-sm leading-6 text-gray-600 dark:text-gray-400 ">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
          <div className="col-span-3 ">
          {Array(5).fill(null).map((_, index: any) => (
              <div key={index} className="col-span-1 flex rounded-md shadow-sm pb-5">
                <div className="flex flex-1 items-center justify-between  ">
                  <div className="flex-1  lg:px-4 text-sm">
                  <Link href={`../news/`}
                      className="font-bold  text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
                    >
                     Govt move to check prices falls flat Govt move to check prices falls flat Govt move to check prices falls flat
                    </Link>
                    <p className="text-gray-500"> 
                    <Link  href={`/category/$`}>
                   category /
                    </Link>
                    {" "}
                    <Link  href={`/category/`}>
                  subcategory
                    </Link>
                      </p>
                      <time
                   
                    className="text-gray-500 dark:text-gray-400"
                  >
                    2020-03-16
                  </time>
                  </div>
                </div>
                <div
                  className={classNames(
                    "flex w-24 flex-shrink-0 items-center top-0 justify-center rounded-l-md text-sm font-medium text-white"
                  )}
                >
                  <Link href={`../news/`}>
                    <Image
                      src={"https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
                      alt=""
                      width={200}
                      height={160}
                      className="mx-auto object-cover h-24 w-60 rounded-md"
                    />
                  </Link>
                </div>
               
              </div>
            ))}
          </div>
          <div className="flex flex-col col-span-2 lg:pl-4 ">
            <div className=" h-[50%]">
            <Image
                    src={"https://images.unsplash.com/photo-1657934787560-cbecc866430a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
                    alt={""}
                    width={640}
                    height={427}
                    className="max-w-full w-full h-full mx-auto rounded-md bg-gray-50"
                  />
            </div>
            <div className="pt-4">
            <div className="p-4 mb-4 bg-stone-200 dark:bg-[#071720] rounded-lg">
                          <h2 className=" text-lg font-bold text-center text-black dark:text-gray-400">
                          এলাকা ভিত্তিক সংবাদ
                          </h2>
                        </div>
            
              <DropdownSelect/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
