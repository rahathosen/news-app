import Link from "next/link";
import Image from "next/image";
import { adGQL } from "@/lib/getGQL";

export default async function MobileCoverLeaderboardAd() {
  const adbox = await adGQL(5);
  const ad = adbox.adsByBoxPosition
  return (
    <div className="my-2 flex justify-center items-center">
    <Link href="#">
      <Image
        src={ad.image}
        alt={""}
        width={320}
        height={100}
        className="max-w-max w-full max-h-max object-cover rounded-md"
      />
    </Link>
  </div>
  );
}
