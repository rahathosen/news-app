"use client";


import Link from "next/link";
import Image from "next/image";

export default function RowAd() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] 2xl:container mx-auto max-w-[85rem] rounded-md my-2">
      {/* <main className="px-2 py-2"> */}
        <Link href="#">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <Image
              src={
                "https://images.unsplash.com/photo-1606229879610-e456267a855e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1629&q=80"
              }
              alt={""}
              width={640}
              height={427}
              className="max-w-full w-full  max-h-[6.2rem] object-cover rounded-md"
            />

            <div className="absolute top-0 inset-0 text-center items-center px-2 py-2">
              <h4 className="text-xl  font-semibold tracking-tight text-white">
                Advertisement
              </h4>
            </div>
          </div>
        </Link>
      {/* </main> */}
    </div>
  );
}
