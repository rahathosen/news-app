import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Test() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
      <div>
        {/* <h1>Fetch Data</h1> */}
        {/* {data.posts.map((post: any) => (
          <div key={post.id} className="">
            <div className="flex flex-row sm:block hover-img">
              Id: {post.id}
            </div>
            <div className="flex flex-row sm:block hover-img">
              Title: {post.title}
            </div>
            <div className="flex flex-row sm:block hover-img">
              CreatedAt :{post.createdAt}
            </div>
            <div className="flex flex-row sm:block hover-img">
              Url: {post.url}
            </div>
            <div className="flex flex-row sm:block hover-img">
              <Image
                src={`https://django-news-server.vercel.app/static/${post.image}`}
                alt={""}
                width={640}
                height={427}
                className="max-w-full w-full mx-auto rounded-md"
              />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
