import Link from "next/link";
import Image from "next/image";
import { adGQL } from "@/lib/getGQL";

export default async function OtherPageRectangleAd() {
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
    return (
      <div className="relative my-2 flex justify-center items-center">
        <Link href={"/"}>
          <Image
            src={
              "https://res.cloudinary.com/dfbhz3cfv/image/upload/v1700557039/gstafjnbadl34eluhhse.png"
            }
            alt={"default other page rectange ad"}
            width={970}
            height={250}
            className="max-w-max w-full max-h-max object-cover rounded-md"
          />
          <div className="absolute inset-0 left-1/2 top-4 flex -translate-x-1/2 transform justify-center px-2 text-white">
            <h1 className="text-3xl font-bold text-black">BD News 20</h1>
          </div>
        </Link>
      </div>
    );
  }
}
