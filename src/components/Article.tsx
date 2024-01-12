import { dataConverter } from "@/utils/data-converter"
import Link from "next/link"

export const Article = ({ post }: any) => {
  return (
    <Link href={`/post/${post.slug}`}
      className="gap-2 min-h-56 p-4 flex flex-col justify-end rounded-xl bg-[#ffffff1a] bg-center bg-no-repeat bg-cover transition-all"
      style={{ backgroundImage: `linear-gradient(rgba(7, 2, 18, 0), rgba(7, 2, 18, 0.75)), url(/blog/${post.image})` }}
    >

      <h1 className="text-xl font-semibold text-white">
        {post.title}
      </h1>

      <div className="text-[#ffffffbf]">
        {dataConverter(post.date)}
      </div>

      <div className="flex gap-2">
        <span className="p-1 bg-[#ffffff1a] rounded-md text-[#ffffffbf]">
          #tag1
        </span>
        <span className="p-1 bg-[#ffffff1a] rounded-md text-[#ffffffbf]">
          #tag2
        </span>
      </div>
    </Link>
  )
}