import { Article } from "@/components/Article";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export const HomeScreen = async () => {

  const posts = getAllPosts(['title', 'date', 'slug', 'image']);

  return (
    <div className="grid w-full flex flex-col mt-4">
      {
        posts.map(post =>
          <Article key={post.slug} post={post} />
        )
      }
    </div>
  );
}