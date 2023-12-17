import Link from "next/link";
import Image from "next/image";
import { adGQL } from "@/lib/getGQL";
export default async function HomeBillboardAd() {
  try {
    const adbox = await adGQL(1);
    const ad = adbox.adsByBoxPosition;

    return (
      <div className="my-2 flex justify-center items-center">
        <Link href={ad.link}>
          <Image
            src={ad.image}
            alt={ad.title}
            width={970}
            height={250}
            className="max-w-max w-full max-h-max object-cover"
          />
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Error fetching ad:", error);
    return (
      <div className="relative my-2 flex justify-center items-center">
        <Link href="#">
          <Image
            src="https://res.cloudinary.com/dfbhz3cfv/image/upload/v1700556370/kisq4t5h8nrixcbjptyl.png" // Replace with your default ad image path
            alt="Default Ad"
            width={970}
            height={250}
            className="max-w-max w-full max-h-max object-cover"
          />
          <div className="absolute inset-0 left-1/2 top-4 flex -translate-x-1/2 transform justify-center px-2 text-white">
            <h1 className="lg:text-xl text-sm font-bold text-black">BD News 20</h1>
          </div>
        </Link>
      </div>
    );
  }
}
