import Image from "next/image";
import Link from "next/link";
import Divider from "./ui/divider";
import RelativeDate from "@/lib/relativeDate";
import Section from "./section";
import CategoryNews from "./categoryNews";
import { sectionGQL } from "@/lib/getGQL";
import MPUAd from "./advertisement/mediumRectangleMPUAd";
export default async function HomeNews({  }: any) {

 const sectionbox = await sectionGQL();
 const section = sectionbox.sectionBox 
  return (
    <div>
      <div>
        {section.map((box: any) =>
         (
          <div key={box.category.uniqueId}>
            <div>
              <CategoryNews categoryTitle = {box.category.title}  categoryUId={box.category.uniqueId}/>
            </div>
            <MPUAd/>
          </div>
        ))}
      </div>
    </div>
  );
}
