import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import NewsGridTemplate from "@/components/layouts/newsGridTemplate";
import RowAd from "@/components/layouts/row-ad";
import { newsCategoriesGQL, navigationGQL, allPosts } from "@/lib/getGQL";

type Props = {
  params: { subCategoryId: number; categoryId: number };
};

export default async function Page({ params }: Props) {
  const data = await newsCategoriesGQL();

  const category = data.newsCategories.find(
    (category: any) => category.id === params.categoryId
  );
  const subcategory = category.newssubcategorySet.find(
    (subcategory: any) => subcategory.id === params.subCategoryId
  );

  return (
    <div>
      <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
        <div>
          <div className="relative xl:container mx-auto px-3 sm:px-4 xl:px-2 py-4 bg-stone-100 dark:bg-[#040D12] ">
            <div className="relative">
              <h2 className="text-black dark:text-gray-400 lg:text-3xl pb-4 text-xl font-bold">
                <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
                {category.title} / {subcategory.title}
              </h2>
              <div>
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                  {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                  {/* mobile dropdown menu */}
                  {/* {tabs && (
                  <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-red-700 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    defaultValue={tabs.find((tab: any) => tab.current)?.name}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                )} */}
                </div>
                <div className="no-scrollbar overflow-x-auto">
                  <div className="border-b border-gray-200 dark:border-[#071720]"></div>
                </div>
              </div>
              {/* Tab end */}
              <NewsGridTemplate />
            </div>
          </div>
        </div>
        A
      </div>
    </div>
  );
}
