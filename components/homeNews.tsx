import Image from "next/image";
import Link from "next/link";
import Divider from "./ui/divider";
import RelativeDate from "@/lib/relativeDate";
import Section from "./section";
export default function HomeNews({ posts, newsCategory }: any) {
  return (
    <div>
      <div>
        {newsCategory.newsCategories.map((category: any) => (
          <div key={category.id}>
            <div>
              <Section
                categoryTitle={category.title}
                categoryId={category.id}
                posts={posts}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
