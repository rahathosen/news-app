import Image from "next/image";
import Divider from "../ui/divider";

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

export default function EighthSection() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      <Divider />
      <div>
        {/* <!-- block news --> */}
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
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
