import Image from "next/image";

const popularPosts = [
  {
    id: 1,
    title: " Why the world would end without political polls",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 2,
    title: " Meet The Man Who Designed The Ducati Monster",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 3,
    title: "2020 Audi R8 Spyder spy shots release",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 4,
    title: " Lamborghini makes Huracán GT3 racer faster for 2019",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 5,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 6,
    title: " Why the world would end without political polls",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 7,
    title: " Meet The Man Who Designed The Ducati Monster",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 8,
    title: "2020 Audi R8 Spyder spy shots release",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 9,
    title: " Lamborghini makes Huracán GT3 racer faster for 2019",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 10,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 11,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    date: "Mar 16, 2020",
  },
  {
    id: 12,
    title: "ZF plans $14 billion autonomous vehicle push, concept van",
    href: "#",
    date: "Mar 16, 2020",
  },
];

export default function MostViewed() {
  return (
    <>
      <div className="">
        <div className="p-4 bg-stone-200 dark:bg-[#071720] rounded-lg">
          <h2 className="lg:text-xl text-lg font-bold text-black dark:text-gray-400">
            Most Popular
          </h2>
        </div>
        <ul className="post-number">
          {popularPosts.slice(0, 12).map((post) => (
            <li
              key={post.id}
              className="border-b border-gray-100 dark:border-gray-900 hover:bg-stone-300 rounded-lg dark:hover:bg-[#030b10]"
            >
              <a
                className="text-sm font-bold px-6 py-3 flex flex-row items-center text-gray-800 dark:text-gray-400"
                href="#"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
