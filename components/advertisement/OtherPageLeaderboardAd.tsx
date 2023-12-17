import Link from "next/link";
import Image from "next/image";
import { adGQL,websiteInfoGQL } from "@/lib/getGQL";

export default async function OtherPageLeaderboardAd() {
  const webInfo = await websiteInfoGQL();
  try {
    const adbox = await adGQL(12);
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
    return (
      <div className="relative my-2 flex justify-center items-center">
        <Link href={"/"}>
          <Image
            src={
              "https://res.cloudinary.com/dfbhz3cfv/image/upload/v1700557084/lrkmdnioqouoakdhx3lh.png"
            }
            alt={"default other page leaderboard ad"}
            width={970}
            height={250}
            className="max-w-max w-full max-h-max object-cover "
          />
          <div className="absolute inset-0 left-1/2 top-4 flex -translate-x-1/2 transform justify-center px-2 text-white">
            <h1 className="lg:text-xl text-sm font-bold text-black">{webInfo.websiteInfo.title}</h1>
          </div>
        </Link>
      </div>
    );
  }
}
