import Image from "next/image";
import Divider from "./ui/divider";

const posts = [
  {
    id: 1,
    title: "Amazon Shoppers Are Ditching Designer Belts For This Best-Selling",
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
    title: "Boost your conversion rate",
    href: "#",
    tag: "Europe",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    tag: "Europe",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    tag: "Europe",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
  {
    id: 5,
    title: "Boost your conversion rate",
    href: "#",
    tag: "Europe",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
  },
];

export default function ForthSection() {
  return (
    <div>
      <div className="bg-stone-100 dark:bg-[#040D12] mt-4 rounded-lg pt-4 mb-4 pb-4">
        <Divider />
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-2 lg:pb-0 lg:pr-1">
              {posts.slice(0, 1).map((post) => (
                <div
                  key={post.id}
                  className="relative group hover-img dark:hover-img-dark max-h-98 overflow-hidden"
                >
                  <a href="#">
                    <Image
                      src={post.imageUrl
                      }
                      alt={""}
                      width={640}
                      height={427}
                      className="max-w-full w-full mx-auto  max-h-98 h-auto rounded-md "
                    />
                  </a>
                  <div className="absolute px-5 pt-28 pb-5 bottom-0 w-full bg-gradient-cover ">
                    <a href="#">
                      <span className="lg:text-2xl font-semibold capitalize text-white ">
                        {post.title }
                      </span>
                    </a>
                    <p className="text-gray-100 hidden sm:inline-block">
                      {post.description}
                    </p>
                    <div className="pt-2">
                      <div className="text-gray-100">
                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                        {post.tag}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
{/* Article */}
            <div className="flex-shrink max-w-full  w-full lg:w-1/2">
              <div className="box-one flex gap-2 sm:gap-0 flex-row flex-wrap">
              {posts.slice(1,5).map((post)=>(
                    <article key={post.id} className="flex-shrink max-w-full w-full sm:w-1/2">

                    <div className="relative group hover-img dark:hover-img-dark max-h-48 overflow-hidden">
                      <a href="#">
                        <Image
                          src={post.imageUrl
                          }
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full w-full mx-auto max-h-48 h-auto rounded-md"
                        />
                      </a>
                      <div className="absolute px-5 pt-28 pb-5 bottom-0 w-full bg-gradient-cover">
                        <a href="#">
                          <h2 className="tlg:text-2xl font-semibold capitalize text-white  leading-tight  mb-1">
                            {post.title}
                          </h2>
                        </a>
                        <div className="pt-1">
                          <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                           {post.tag}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                    ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
