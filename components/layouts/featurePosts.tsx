import Image from "next/image";
import Link from "next/link";

interface Post {
  id: string;
  uniqueId: string;
  title: string;
  category: {
    id: number;
    title: string;
  };
}

export default  function  FeaturePosts({ webInfo ,posts,categoryId }: any) {

  const categoryPosts = posts.allPosts.filter(
    (post: Post) => post.category.id === categoryId
  );

  return (
    <li className="col-start-2 grid grid-cols-5 gap-x-2 gap-y-6 pr-8">
      {categoryPosts.slice(0,8).map((item: any) => (
        <Link key={item.id} href={`/news/${item.uniqueId}`}>
          <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
            <Image
              src={item.image || webInfo.websiteInfo.newsThumbnail}
              alt={item.title}
              width={240}
              height={120}
              className="object-cover  object-center"
            />
          </div>
          <div className="py-0 sm:py-3 pl-3 sm:pl-0">
            <h3 className="text-sm font-medium leading-tight  text-black dark:text-white">
              <Link href={`/news/${item.uniqueId}`}>{item.title}</Link>
            </h3>
          </div>
        </Link>
      ))}
    </li>
  );
}
