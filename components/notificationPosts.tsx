"use client";
import RelativeDate from "@/lib/relativeDate";
import { SheetClose } from "./ui/sheet";
import Link from "next/link";
export default function NotificationPosts({ posts }: any) {
  return (
    <>
      <div>
        {posts.slice(0, 8).map((post: any) => (
          <div
            key={post.uniqueId}
            className="flex flex-col gap-2  rounded-md text-sm p-2 "
          >
            <SheetClose asChild>
            <Link href={`/news/${post.uniqueId}`}
                className="dark:bg-[#071720] bg-gray-100 hover:bg-gray-200 dark:hover:bg-[#0e232e] p-3 rounded-md"
              >
                <p>{post.title}</p>
                <div className="text-neutral-400 font-medium text-sm  dark:text-neutral-600">
                  <RelativeDate date={post.createdAt} />{" "}
                </div>
              </Link>
            </SheetClose>
          </div>
        ))}
      </div>
    </>
  );
}
