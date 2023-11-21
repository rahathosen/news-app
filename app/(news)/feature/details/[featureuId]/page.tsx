import {
  CheckCircleIcon,
  InformationCircleIcon,
  HomeIcon,
  ChevronRightIcon,
  ShareIcon,
} from "@heroicons/react/20/solid";

import Image from "next/image";
import MostViewed from "@/components/similarNews";
import RelatedNews from "@/components/relatedNews";
import Author from "@/components/layouts/author";
import Breadcrumb from "@/components/breadcrumb";
import Badges from "@/components/ui/badges";
import type { Metadata, ResolvingMetadata } from "next";
import {
  newsCategoriesGQL,
  allPosts,
  PostDetail,
  websiteInfoGQL,
  postByCategoryGQL,
  fetureDetailGQL,
} from "@/lib/getGQL";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

type Props = {
  params: { featureuId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  const featurePost = await fetureDetailGQL(params.featureuId);
  const post = featurePost.featurePost;

  return {
    title: `${post.title} - ${webInfo.websiteInfo.title}`,
    openGraph: {
      title: `${post.title}  (${webInfo.websiteInfo.title})`,
      description: `${post.description.slice(0, 400)}`,
      url: `${webInfo.websiteInfo.url}`,
      siteName: `${webInfo.websiteInfo.title}`,
      images: [
        {
          url: `${post.image || webInfo.websiteInfo.newsThumbnail}`,
          width: 1200,
          height: 630,
        },
        {
          url: `${post.image || webInfo.websiteInfo.newsThumbnail}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

export default async function Page({ params }: Props) {
  const featurePost = await fetureDetailGQL(params.featureuId);
  const post = featurePost.featurePost;

  return (
    <div className="bg-white dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  mb-4">
      {/* breadcumb start */}
      <nav
        className="flex justify-between border-b xl:container mx-auto px-3 sm:px-4 xl:px-2 mb-4 border-stone-200 dark:border-[#071720] bg-white dark:bg-[#040D12] "
        aria-label="Breadcrumb"
      >
        <ol
          role="list"
          className="mx-auto flex w-full max-w-screen-xl  mb-4 "
        >
          <li className="flex text-sm">
            <div className=" flex items-center">
              <Link
                href="/"
                className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700"
              >
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
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
                href={`/feature`}
                className="text-sm lg:text-base font-semibold  text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700"
              >
                ফিচার
              </Link>
            </div>
            <div className=" flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-600 dark:text-gray-600"
                aria-hidden="true"
              />
              <Link
                href={`/feature/${post.category.feature.uniqueId}`}
                className=" text-sm lg:text-base font-semibold text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700"
              >
                {post.category.feature.title}
              </Link>
            </div>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-600 dark:text-gray-600"
                aria-hidden="true"
              />
              <Link
                href={`/feature/${post.category.feature.uniqueId}/${post.category.uniqueId}`}
                className=" text-sm lg:text-base font-semibold  text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700"
              >
                {post.category.title}
              </Link>
            </div>
          </li>
        </ol>
        <div className="">
          <ShareIcon className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700" />
        </div>
      </nav>
      {/* breadcumb end */}
      <div
        role="list"
        className="grid grid-cols-1 md:px-4 px-4  gap-y-2 lg:grid-cols-7 xl:gap-x-2"
      >
        <div className="hidden lg:block col-span-2">
          <div>
            <Author post={post} />
            <Tabs defaultValue="lastnews" className="w-full">
              <TabsList>
                <TabsTrigger value="lastnews">সর্বশেষ</TabsTrigger>
                <TabsTrigger value="mostpopular">সর্বাধিক পঠিত</TabsTrigger>
              </TabsList>
              <TabsContent value="lastnews">সর্বশেষ সংবাদ here.</TabsContent>
              <TabsContent value="mostpopular">সর্বাধিক পঠিত here.</TabsContent>
            </Tabs>

            {/* <MostViewed categoryPosts={categoryPosts} /> */}
          </div>
        </div>

        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 lg:px-4 col-start-auto col-span-4 ">
          <h1 className="mt-2 pb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl text-center ">
            {post.title}
          </h1>
          <figure className="mt-4">
            <Image
              src={post.image}
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
              {post.imageSource}
            </figcaption>
          </figure>
          <p className="mt-6 text-xl leading-8 dark:text-gray-400">
            <div
              dangerouslySetInnerHTML={{
                __html: post.details,
              }}
            ></div>
          </p>

          {/* <div>
              <h4 className="lg:pt-8 pt-4 pb-4 border-b border-white dark:border-[#071720] text-lg lg:text-2xl font-bold text-gray-600 dark:text-gray-400">
                Related Topics:
              </h4>
              <Badges post={post} />
            </div> */}
        </div>
        {/* <div className="col-span-1">
            <div className="lg:hidden">
              <Author post={post} />
            </div>
            <RelatedNews categoryPosts={categoryPosts} />
          </div> */}
      </div>
      {/* <div className="px-4 py-2 lg:hidden">
          <MostViewed categoryPosts={categoryPosts} />
        </div> */}
    </div>
  );
}
