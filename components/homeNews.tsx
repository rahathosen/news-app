import CategoryNews from "./categoryNews";
import { sectionGQL } from "@/lib/getGQL";

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
                catSetPost={box.category}
                categoryTitle={box.category.title}
                categoryUId={box.category.uniqueId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
