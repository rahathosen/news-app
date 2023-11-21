import Link from "next/link";
import Image from "next/image";
import { adGQL } from "@/lib/getGQL";

export default async function MPUAd() {
  const adbox = await adGQL(7);
  const ad = adbox.adsByBoxPosition
  return (
    <div className="my-2 flex justify-center items-center">
    <Link href="#">
      <Image
        src={ad.image}
        alt={""}
        width={300}
        height={250}
        className="max-w-max w-full max-h-max object-cover rounded-md"
      />
    </Link>
  </div>
  );
}
