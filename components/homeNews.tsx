import CategoryNews from "./categoryNews";
import { sectionGQL, websiteInfoGQL } from "@/lib/getGQL";

export default async function HomeNews({}: any) {
  const webInfo = await websiteInfoGQL();
  const sectionbox = await sectionGQL();
  const section = sectionbox.sectionBox;
  return (
    <div>
      <div>
        {section ? (
          <>
            {" "}
            {section.map((box: any) => (
              <div key={box.category.uniqueId}>
                <div>
                  <CategoryNews
                    webInfo={webInfo}
                    catSetPost={box.category}
                    categoryTitle={box.category.title}
                    categoryUId={box.category.uniqueId}
                  />
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
