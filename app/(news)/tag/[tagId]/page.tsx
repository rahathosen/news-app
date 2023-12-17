import type { Metadata, ResolvingMetadata } from "next";
import RelativeDateMinimal from "@/lib/relativeDateMinimal";
import {
  postsByTagGQL,
  websiteInfoGQL
} from "@/lib/getGQL";

import Tag from "@/components/layouts/tag";
import OtherPageSuperLeadeAd from "@/components/advertisement/otherPageSuperLeadeAd";
import OtherPageLeaderboardAd from "@/components/advertisement/OtherPageLeaderboardAd";

type Props = {
  params: { tagId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  const postsByTag = await postsByTagGQL(params.tagId);
  const sortDetails = postsByTag.postsTag.sortDetails ? `${postsByTag.postsTag.sortDetails}` : '';
  return {
    title: `${postsByTag.postsTag.title} - ${webInfo.websiteInfo.title}`,
    description: `${sortDetails}`,
    openGraph: {
      title: `${postsByTag.postsTag.title} - ${webInfo.websiteInfo.title}`,
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
  const postsByTag = await postsByTagGQL(params.tagId);
  // const postsByTagLength = postsByTag.postsTag.postSet.length;

  return (
    <div>
      <OtherPageSuperLeadeAd/>
      <div className="bg-white dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
        <div>
          <div className= "">
            <div className="relative">
              <h2 className=" text-black dark:text-white  lg:text-2xl pb-4 text-xl font-bold">
                <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
                {postsByTag.postsTag.title}
              </h2>
              <div>
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                </div>
              </div>
              <Tag postsByTag={postsByTag.postsTag} />
            </div>
          </div>
        </div>
      </div>
      <OtherPageLeaderboardAd/>
    </div>
  );
}
