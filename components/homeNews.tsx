import Image from "next/image";
import Link from "next/link";
import Divider from "./ui/divider";
import RelativeDate from "@/lib/relativeDate";
import Section from "./section";
import CategoryNews from "./categoryNews";
import { sectionGQL, postByDivisionGQL } from "@/lib/getGQL";
import CoverLeaderboardAd from "./advertisement/coverLeaderboardAd";
import MobileCoverLeaderboardAd from "./advertisement/mobileCoverLeaderboardAd";

export default async function HomeNews({}: any) {
  const sectionbox = await sectionGQL();
  const section = sectionbox.sectionBox;
  return (
    <div>
      <div>
        {section.map((box: any) => (
          <div key={box.category.uniqueId}>
            <div>
              <CategoryNews
                categoryTitle={box.category.title}
                categoryUId={box.category.uniqueId}
              />
              {/* LearBoard */}
              <div>
                <div className="my-2 hidden md:block">
                  <CoverLeaderboardAd />
                </div>
                <div className="my-2 block md:hidden">
                  <MobileCoverLeaderboardAd />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
