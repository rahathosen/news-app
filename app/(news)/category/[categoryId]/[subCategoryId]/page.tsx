import {
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";
import { postBySubCategoryGQL,newsCategorygGQL,newsSubCategoryGQL,websiteInfoGQL } from "@/lib/getGQL";
import SubCategory from "@/components/layouts/subCategory";

type Props = {
  params: { categoryId: string; subCategoryId: string };
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const webInfo = await websiteInfoGQL();
  const newsCategory = await newsCategorygGQL(params.categoryId);
  const category = newsCategory.newsCategory
  
  const subCategory = await newsSubCategoryGQL(params.subCategoryId);
  
  return {
    title: `${category.title} (${subCategory.newsSubCategory.title}) - ${webInfo.websiteInfo.title}`,
    openGraph: {
      title: `${category.title} (${subCategory.newsSubCategory.title}) - ${webInfo.websiteInfo.title}`,
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

  const newsCategory = await newsCategorygGQL(params.categoryId);
  const category = newsCategory.newsCategory
  
  const subCategory = await newsSubCategoryGQL(params.subCategoryId);
  
  const newsSubCategory = await postBySubCategoryGQL(params.subCategoryId);
  const subcategoryByPosts = newsSubCategory.postBySubCategory
 
  return (
    <div>
      <div className="bg-white dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
        <div>
          <div className="relative xl:container mx-auto px-3 sm:px-4 xl:px-2 py-4">
            <div className="relative">
              <h2 className=" text-gray-500 dark:text-gray-400 dark:hover:text-gray-600 hover:text-gray-700 lg:text-3xl pb-4 text-xl font-bold">
                <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
                <Link href={`/category/${category.uniqueId}`}>{category.title}</Link>{" "}
                <span className="inline-block lg:px-4 px-2 lg:h-[28px] h-[25px] items-center ">
                  {" "}
                  <ChevronRightIcon
                    className="lg:h-10 h-8 w-8 lg:w-10 text-gray-300 dark:text-[#071720]"
                    aria-hidden="true"
                  />
                </span>
                {subCategory.newsSubCategory.title}
              </h2>
              <div>
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                </div>
                <div className="no-scrollbar overflow-x-auto">
                  <div className="border-b border-gray-200 dark:border-[#071720]">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {category.newssubcategorySet.map((tab: any) => (
                        <Link
                          key={tab.title}
                          href={`../${category.uniqueId}/${tab.uniqueId}`}
                          className={classNames(
                            tab.current
                              ? "dark:border-gray-500 border-black text-black dark:text-gray-200"
                              : "border-transparent text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700",
                            "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                          )}
                          
                        >
                          {tab.title}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
              {/* Tab end */}
              <SubCategory subcategoryByPosts={subcategoryByPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
