import Link from "next/link";

export default function Badges({ post }: any) {
  return (
    <>
      <div className="flex flex-wrap gap-4 pt-4 pb-4">
        {post.tag.map((item: any) => (
          <span
            key={item.id}
            className="inline-flex items-center rounded-full bg-white dark:bg-[#040D12] px-2 py-1 text-sm font-bold text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/40"
          >
            <Link href={`../tag/${item.uniqueId}`}>{item.title}</Link>
          </span>
        ))}
      </div>
    </>
  );
}
