import markdown from "@/lib/markdown";
import { getPost } from "@/lib/posts";
import { PostScreen } from "@/screens/Post";

const PostPage = async ({ params }: any) => {

  const post = getPost(params.slug, [
    'title',
    'date',
    'author',
    'slug',
    'content'
  ])

  post.content = await markdown.toHTML(post.content);

  return <PostScreen post={post} />;
};

export default PostPage;