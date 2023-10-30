import Image from "next/image";
import Link from "next/link";
import Divider from "./ui/divider";
import RelativeDate from "@/lib/relativeDate";
import Section from "./section";
import { newsCategoriesGQL, websiteInfoGQL, allPosts } from "@/lib/getGQL";
import RowAd from "./layouts/row-ad";

interface Post {
  id: number;
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
}

export default async function HomeNews() {
  const posts = await allPosts();
  const newsCategory = await newsCategoriesGQL();
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4 mb-4 pb-4">
      {/* <Divider /> */}
      <div>
        {newsCategory.newsCategories.map((category: any) => (
          <div key={category.id}>
            <RowAd />
            <Section
              categoryTitle={category.title}
              categoryId={category.id}
              posts={posts}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
