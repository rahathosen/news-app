import {
  CheckCircleIcon,
  InformationCircleIcon,
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
} from "@/lib/getGQL";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LatestNws from "@/components/latestnews";
import OldestNews from "@/components/oldestnews";
import OtherPageSuperLeadeAd from "@/components/advertisement/otherPageSuperLeadeAd";
import OtherPageLeaderboardAd from "@/components/advertisement/OtherPageLeaderboardAd";
import DetailsPageAd from "@/components/advertisement/detailsPageAd";
import YouTubePlayer from "@/components/youTubePlayer";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  const singlePost = await PostDetail(params.slug);
  const post = singlePost.post;
  const description = post.description ? `${post.description.slice(0, 400)}`:" ";
  return {
    title: `${post.title} - ${webInfo.websiteInfo.title}`,
    openGraph: {
      title: `${post.title}  (${webInfo.websiteInfo.title})`,
      description: description,
      url: `${webInfo.websiteInfo.url}`,
      siteName: `${webInfo.websiteInfo.title}`,
      images: [
        {
          url: `${post.image}`,
          width: 1200,
          height: 630,
        },
        {
          url: `${post.image}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

export default async function Page({ params }: Props) {
  const singlePost = await PostDetail(params.slug);
  const post = singlePost.post;
  const categoryPosts = await postByCategoryGQL(post.category.uniqueId);

  return (
    <div>
      <OtherPageSuperLeadeAd />
      <div className="bg-white dark:bg-[#040D12]  2xl:p-8 rounded-b-lg rounded-t-lg pt-4">
        <Breadcrumb post={post} />
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
                <TabsContent value="lastnews">
                  <LatestNws categoryPosts={categoryPosts} />
                </TabsContent>
                <TabsContent value="mostpopular">
                  <OldestNews categoryPosts={categoryPosts} />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 lg:px-4 col-start-auto col-span-4 ">
            <h1 className="mt-2 pb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl text-center ">
              {post.title}
            </h1>
            {post.image ? (
              <figure className="mt-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  height={240}
                  width={840}
                  className="aspect-video rounded-xl bg-gray-50 object-cover"
                />

                {post.imageSource ? (
                  <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                    <InformationCircleIcon
                      className="mt-0.5 h-5 w-5 flex-none text-gray-300 dark:text-gray-700"
                      aria-hidden="true"
                    />
                    {post.imageSource}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}

            {post.description ? (
              <p className="my-6 text-xl font-semibold leading-8 dark:text-gray-400">
                <div>{post.description}</div>
              </p>
            ) : null}

            {/* Video  */}
            {post.videoLink ? (
              <>
                <figure className="mt-4 dark:bg-[#001219] bg-[#E7E5E4] px-4 pt-4 lg:pb-10 pb-6 rounded-xl drop-shadow-lg">
                  <YouTubePlayer videoUrl={post.videoLink} />
                  {/* {post.videoLink} */}
                  <figcaption className="mt-6 flex gap-x-2 text-sm leading-6 text-gray-700 dark:text-gray-400">
                    <InformationCircleIcon
                      className="mt-0.5 h-5 w-5 flex-none text-gray-600 dark:text-gray-700"
                      aria-hidden="true"
                    />
                    {post.videoSource}
                  </figcaption>
                </figure>
              </>
            ) : null}

            <p className="mt-6 text-lg leading-8 dark:text-gray-400">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.details,
                }}
              />
            </p>

            {post.tag.length > 0 ? (
              <div>
                <h4 className="lg:pt-8 pt-4 pb-4 border-b border-white dark:border-[#071720] text-lg lg:text-2xl font-bold text-gray-600 dark:text-gray-400">
                  রিলেটেড ট্যাগ:
                </h4>
                <Badges post={post} />
              </div>
            ) : null}
          </div>
          <div className="hidden lg:block col-span-1">
            <DetailsPageAd />
          </div>
          <div className="col-span-1">
            <div className="lg:hidden">
              <Author post={post} />
              <Tabs defaultValue="lastNews" className="w-full">
                <TabsList>
                  <TabsTrigger value="lastNews">সর্বশেষ</TabsTrigger>
                  <TabsTrigger value="oldestNews">সর্বাধিক পঠিত</TabsTrigger>
                </TabsList>
                <TabsContent value="lastNews">
                  <LatestNws catpost={post} categoryPosts={categoryPosts} />
                </TabsContent>
                <TabsContent value="oldestNews">
                  <OldestNews catpost={post} categoryPosts={categoryPosts} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <OtherPageLeaderboardAd />
    </div>
  );
}
