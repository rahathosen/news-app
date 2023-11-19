import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import RelativeDateMinimal from "@/lib/relativeDateMinimal";
import {
  websiteInfoGQL,
  reporterGQL,
} from "@/lib/getGQL";
import RelativeDate from "@/lib/relativeDate";

type Props = {
  params: { authorId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  const reporterInfo = await reporterGQL(params.authorId);
  const reporter = reporterInfo.reporter
  const designation = reporter.designation ? `${reporter.designation}` : '';
  return {
    title: `${reporter.name} - ${webInfo.websiteInfo.title}`,
    openGraph: {
      title: `${reporter.name} - ${webInfo.websiteInfo.title}`,
      description: `${designation}`,
      url: `${webInfo.websiteInfo.url}`,
      siteName: `${webInfo.websiteInfo.title}`,
      images: [
        {
          url: `${reporter.image}`,
          width: 1200,
          height: 630,
        },
        {
          url: `${reporter.image}`,
          width: 800,
          height: 600,
        },
      ],
    },
  };
};

export default async function Page({ params }: Props) {
  const reporterInfo = await reporterGQL(params.authorId);
  const reporter = reporterInfo.reporter
  const postsByAuthorLength = reporter.postSet.length;
  return (
    <div className="bg-white dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      <div>
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="overflow-hidden rounded-lg bg-stone-200 dark:bg-[#071720] shadow mb-4">
            <div className="bg-stone-200 dark:bg-[#071720] p-4">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:space-x-7">
                  <div className="flex-shrink-0">
                    <Image
                      className="mx-auto object-cover h-24 w-24 rounded-full"
                      src={reporter.image}
                      alt=""
                      width={40}
                      height={20}
                    />
                  </div>
                  <div className="mt-0 text-center sm:mt-0 sm:pt-1 sm:text-left">
                    <div>
                      <p className="text-xl font-bold text-gray-900 dark:text-gray-400 sm:text-4xl">
                        {reporter.name}
                      </p>
                    </div>
                    <p className="text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-600">
                      {reporter.designation}
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
                  {postsByAuthorLength}
                </span>
              </div>
              <div className="px-6  text-sm font-medium">
                <span className="text-gray-600 dark:text-gray-600">
                  <span className="font-bold dark:text-gray-500">
                    Last Published Article:
                  </span>{" "}
                  <RelativeDateMinimal date={reporter.updatedAt} />
                </span>
              </div>
            </div>
          </div>
          {/* Author end */}
          <div className="flex flex-row flex-wrap">
            {/* <!-- Left --> */}
            <div className="flex-shrink max-w-full w-full overflow-hidden">
              <div className="flex flex-row flex-wrap -mx-3">
                {reporter.postSet.map((post: any) => (
                  <div
                    key={post.id}
                    className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-[1px] sm:border-b-0 border-solid border-gray-200 dark:border-gray-900"
                  >
                    <div className="flex flex-row sm:block hover-img">
                      <Link href={`../news/${post.uniqueId}`}>
                        <Image
                          src={post.image}
                          alt={""}
                          width={640}
                          height={427}
                          className="max-w-full w-full mx-auto rounded-md"
                        />
                      </Link>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg text-black dark:text-gray-400 font-bold leading-tight mb-2">
                          <Link href={`../news/${post.uniqueId}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p className="hidden md:block text-gray-800 dark:text-gray-400 leading-tight mb-1">
                          {post.description.slice(0, 100) + "..."}
                        </p>
                        <div className="text-gray-600 font-medium text-sm  dark:text-gray-600">
                          <RelativeDate date={post.createdAt} />{" "}
                        </div>
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
