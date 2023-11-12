import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import RowAd from "@/components/advertisement/row-ad";
import type { Metadata, ResolvingMetadata } from "next";
import RelativeDateMinimal from "@/lib/relativeDateMinimal";
import {
  newsCategoriesGQL,
  postsTagsGQL,
  allPosts,
  websiteInfoGQL,
} from "@/lib/getGQL";
import Category from "@/components/layouts/category";
import Tag from "@/components/layouts/tag";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  params: { tagId: number };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  const tags = await postsTagsGQL();
  const tag = tags.postsTags.find((tag: any) => tag.id === params.tagId);

  return {
    title: `${tag.title} - ${webInfo.websiteInfo.title}`,
    description: `${tag.details}`,
    openGraph: {
      title: `${tag.title} - ${webInfo.websiteInfo.title}`,
      url: `${webInfo.websiteInfo.url}`,
      siteName: `${webInfo.websiteInfo.title}`,
      images: [
        {
          url: `${webInfo.websiteInfo.newsThumbnail}`,
          width: 1200,
          height: 630,
        },
        {
          url: `${webInfo.websiteInfo.newsThumbnail}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

export default async function Page({ params }: Props) {
  const posts = await allPosts();
  const tags = await postsTagsGQL();
  const tag = tags.postsTags.find((tag: any) => tag.id === params.tagId);

  const postsByTag =
    posts &&
    posts.allPosts.filter(
      (post: any) =>
        post.tag &&
        Array.isArray(post.tag) &&
        post.tag.some((t: any) => t.id === tag.id)
    );
  const postsByTagLength = postsByTag.length;

  return (
    <div>
      <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
        <div>
          <div className="relative xl:container mx-auto px-3 sm:px-4 xl:px-2 py-4 bg-stone-100 dark:bg-[#040D12] ">
            <div className="relative">
              <h2 className=" text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700 lg:text-3xl pb-4 text-xl font-bold">
                <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
                {tag.title} {`(${postsByTagLength})`}
              </h2>
              <div>
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                </div>
              </div>
              <Tag postsByTag={postsByTag} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
