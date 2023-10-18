import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import RowAd from "@/components/layouts/row-ad";
import type { Metadata, ResolvingMetadata } from "next";
import { newsCategoriesGQL, navigationGQL, allPosts } from "@/lib/getGQL";
import Category from "@/components/layouts/category";
const tabs = [
  { name: "Views", href: "#", current: true },
  { name: "Editorial", href: "#", current: false },
  { name: "In Focus", href: "#", current: false },
  { name: "Letters to the Editor", href: "#", current: false },
];

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const data = await newsCategoriesGQL();

  const category = data.newsCategories.find(
    (category: any) => category.id === params.categoryId
  );

  return {
    title: `${category.title} - দৈনিক উদয়ন`,
    openGraph: {
      title: `${category.title}`,
      url: "https://www.dailyudayan.com",
      siteName: "দৈনিক উদয়ন",
    },
  };
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  params: { categoryId: number };
};

export default async function Page({ params }: Props) {
  const data = await newsCategoriesGQL();
  const allpost = await allPosts();
  const category = data.newsCategories.find(
    (category: any) => category.id === params.categoryId
  );
  return (
    <div>
      <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
        <div>
          <div className="relative xl:container mx-auto px-3 sm:px-4 xl:px-2 py-4 bg-stone-100 dark:bg-[#040D12] ">
            <div className="relative">
              <h2 className="text-black dark:text-gray-400 lg:text-3xl pb-4 text-xl font-bold">
                <span className="inline-block lg:h-6 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
                {category.title}
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
                  <div className="border-b border-gray-200 dark:border-[#071720]">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {category.newssubcategorySet.map((tab: any) => (
                        <Link
                          key={tab.title}
                          href={`${category.id}/${tab.id}`}
                          className={classNames(
                            tab.current
                              ? "dark:border-gray-500 border-black text-black dark:text-gray-200"
                              : "border-transparent text-gray-500 hover:border-gray-300 dark:hover:border-gray-600 hover:text-gray-700",
                            "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                          )}
                          aria-current={tab.current ? "page" : undefined}
                        >
                          {tab.title}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
              {/* Tab end */}
              <Category allpost={allpost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
