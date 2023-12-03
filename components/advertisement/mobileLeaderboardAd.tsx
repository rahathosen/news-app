import Link from "next/link";
import Image from "next/image";
import { adGQL } from "@/lib/getGQL";

export default async function 	MobileLeaderboardAd() {
  const adbox = await adGQL(9);
  const ad = adbox.adsByBoxPosition
  return (
    <div className="my-2 flex justify-center items-center">
    <Link href={ad.link}>
      <Image
        src={ad.image}
        alt={ad.title}
        width={320}
        height={50}
        className="max-w-max w-full max-h-max object-cover rounded-md"
      />
    </Link>
  </div>
  );
}
