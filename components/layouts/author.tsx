import Image from "next/image";
import Link from "next/link";

const user = {
  name: "Rahat Hosen",
  url: "rahathosen",
  role: "Front-end focus software engineer ",
  imageUrl:
    "https://rahat.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmypic.eeffca13.jpg&w=3840&q=75",
};

export default function Author({ date }: any) {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-stone-200 dark:bg-[#071720] shadow mb-4">
        <div className="bg-stone-200 dark:bg-[#071720] p-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <Image
                  className="mx-auto object-cover h-16 w-16 rounded-full"
                  src={user.imageUrl}
                  alt=""
                  width={40}
                  height={20}
                />
              </div>
              <div className="mt-0 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <Link href={user.url}>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-400 sm:text-2xl">
                    {user.name}
                  </p>
                </Link>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-600">
                  {user.role}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap py-6 items-center justify-center lg:justify-between   border-t dark:border-[#040D12] border-gray-50 bg-stone-200 dark:bg-[#071720] ">
          <div className="px-6 item-center lg:pb-2 sm:pb-0 pb-2  text-sm font-medium">
            <span className="text-gray-600 dark:text-gray-600">
              <span className="font-bold dark:text-gray-500">Published:</span>{" "}
              {date}
            </span>
          </div>
          <div className="px-6  text-sm font-medium">
            <span className="text-gray-600 dark:text-gray-600">
              <span className="font-bold dark:text-gray-500">Updated:</span> Wed
              Sep 13, 2023 02:52 PM
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
