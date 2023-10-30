import Image from "next/image";
import Link from "next/link";
import Divider from "./ui/divider";
import RelativeDate from "@/lib/relativeDate";
import Section from "./section";
import RowAd from "./advertisement/row-ad";

interface Post {
  id: number;
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
}

export default function HomeNews({ posts, newsCategory }: any) {
  return (
    <div>
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
