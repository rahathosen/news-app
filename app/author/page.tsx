import Image from "next/image";
import Link from "next/link";
// import Divider from "./ui/divider";
import Author from "@/components/layouts/author";
const posts = [
  {
    id: 1,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 4,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 5,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 6,
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    href: "#",
    tag: "Europe",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content...",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
];

const user = {
  name: "Rahat Hosen",
  url: "rahathosen",
  role: "Front-end focus software engineer ",
  imageUrl:
    "https://rahat.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmypic.eeffca13.jpg&w=3840&q=75",
};

export default function Page() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      <div>
        {/* <!-- block news --> */}
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          {/* Author start */}
          <div className="overflow-hidden rounded-lg bg-stone-200 dark:bg-[#071720] shadow mb-4">
            {/* <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2> */}
            <div className="bg-stone-200 dark:bg-[#071720] p-4">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:space-x-7">
                  <div className="flex-shrink-0">
                    <Image
                      className="mx-auto object-cover h-24 w-24 rounded-full"
                      src={user.imageUrl}
                      alt=""
                      width={40}
                      height={20}
                    />
                  </div>
                  <div className="mt-0 text-center sm:mt-0 sm:pt-1 sm:text-left">
                    {/* <p className="text-sm font-medium text-gray-600">Welcome back,</p> */}
                    <Link href={user.url}>
                      <p className="text-xl font-bold text-gray-900 dark:text-gray-400 sm:text-4xl">
                        {user.name}
                      </p>
                    </Link>
                    <p className="text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-600">
                      {user.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap py-6 items-center lg:justify-between  border-t dark:border-[#040D12] border-gray-50 bg-stone-200 dark:bg-[#071720] ">
              <div className="px-6 item-center lg:pb-2 sm:pb-0 pb-2  text-sm font-medium">
                <span className="text-gray-600 dark:text-gray-600 font-bold">
                  <span className="font-bold dark:text-gray-500">
                    Total Article Published:
                  </span>{" "}
                  15
                </span>
              </div>
              <div className="px-6  text-sm font-medium">
                <span className="text-gray-600 dark:text-gray-600">
                  <span className="font-bold dark:text-gray-500">
                    Last Published Article:
                  </span>{" "}
                  Wed Sep 13, 2023 02:52 PM
                </span>
              </div>
            </div>
          </div>
          {/* Author end */}
          <div className="flex flex-row flex-wrap">
            {/* <!-- Left --> */}
            <div className="flex-shrink max-w-full w-full overflow-hidden">
              <div className="flex flex-row flex-wrap -mx-3">
                {posts.slice(0, 6).map((post) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                  >
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <Image
                          src={
                            "https://images.unsplash.com/photo-1693761935581-1f6a0ab16590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                          }
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full w-full mx-auto rounded-md"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg text-black dark:text-gray-400 font-bold leading-tight mb-2">
                          <a href="#">{post.title}</a>
                        </h3>
                        <p className="hidden md:block text-gray-800 dark:text-gray-400 leading-tight mb-1">
                          {post.description}
                        </p>
                        <a
                          className="text-gray-800 font-medium dark:text-gray-400"
                          href="#"
                        >
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                          {post.tag}
                        </a>
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
