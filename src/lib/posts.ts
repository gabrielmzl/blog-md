import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'src/posts');

function getMarkdownsFiles(): string[] {
  return fs.readdirSync(postsDirectory) as string[];
}

interface Post {
  slug: string;
  content: string;
  [key: string]: any;
}

export function getPost(slugOrFilename: string, fields: string[]): Post {
  const slug = slugOrFilename.replace(/\.md$/, '');
  const directory = join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(directory, 'utf8');
    const { data, content } = matter(fileContents);

    const post: Post = { slug: "", content: "" };

    fields.forEach((field) => {
      if (field === 'content') post.content = content;
      if (field === 'slug') post.slug = slug;
      if (data[field]) post[field] = data[field];
    });

    return post;
  } catch (error) {
    throw new Error(`Error reading post ${slugOrFilename}: ${error}`);
  }
}

export function getAllPosts(fields: string[] = []): Post[] {
  const slugs = getMarkdownsFiles();

  const posts: Post[] = slugs
    .map((slug) => getPost(slug, fields))
    .sort((a, b) => new Date(b.date)!.getTime() - new Date(a.date)!.getTime());

  return posts;
}
