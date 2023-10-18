import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import MostViewed from "@/components/mostViewed";
import RelatedNews from "@/components/relatedNews";
import Author from "@/components/layouts/author";
import Breadcrumb from "@/components/breadcrumb";
import Badges from "@/components/ui/badges";
import type { Metadata, ResolvingMetadata } from "next";
import getData from "@/lib/getNews";

interface Post {
  title: string;
  slug: string;
  href: string;
  tag: string;
  description: string;
  imageUrl: string;
  date: string;
  datetime: string;
}

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const posts: Post[] = await fetch("https://www.dailyudayan.com/api/content", {
    cache: "no-cache",
  }).then((res) => res.json());

  const post = posts.find((post) => post.slug === params.slug)!;

  return {
    title: `${post.title}`,
    openGraph: {
      title: `${post.title}`,
      description: `${post.description.slice(0, 400)}`,
      url: "https://www.dailyudayan.com",
      siteName: "দৈনিক উদয়ন",
      images: [
        {
          url: `${post.imageUrl}`,
          width: 1200,
          height: 630,
        },
        // {
        //   url: `${post.imageUrl}`,
        //   width: 800,
        //   height: 600,
        // },
      ],
    },
  };
};

export default async function Page({ params }: Props) {
  const posts: Post[] = await fetch("https://www.dailyudayan.com/api/content", {
    cache: "no-cache",
  }).then((res) => res.json());

  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
      <Breadcrumb />
      <div
        role="list"
        className="grid grid-cols-1 md:px-4 px-4  gap-y-2 lg:grid-cols-7 xl:gap-x-2"
      >
        <div className="hidden lg:block col-span-2">
          <div>
            <Author date={post.date} />
            <MostViewed />
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 lg:px-4 col-start-auto col-span-4 ">
          <h1 className="mt-2 pb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl text-center ">
            {post.title}
          </h1>
          <figure className="mt-4">
            <Image
              src={post.imageUrl}
              alt=""
              height={240}
              width={840}
              className="aspect-video rounded-xl bg-gray-50 object-cover"
            />

            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="mt-0.5 h-5 w-5 flex-none text-gray-300 dark:text-gray-700"
                aria-hidden="true"
              />
              The country’s solar home systems programme could not achieve its
              desired impact due to the lack of grassroots capacity and
              servicing. PHOTO: REUTERS.
            </figcaption>
          </figure>
          <p className="mt-6 text-xl leading-8 dark:text-gray-400">
            {post.description}
          </p>

          <div>
            <h4 className="lg:pt-8 pt-4 pb-4 border-b border-white dark:border-[#071720] text-lg lg:text-2xl font-bold text-gray-600 dark:text-gray-400">
              Related Topics:
            </h4>
            <Badges />
          </div>
        </div>
        <div className="col-span-1">
          <div className="lg:hidden">
            <Author date={post.date} />
          </div>
          <RelatedNews />
        </div>
      </div>
      <div className="px-4 py-2 lg:hidden">
        <MostViewed />
      </div>
    </div>
  );
}
