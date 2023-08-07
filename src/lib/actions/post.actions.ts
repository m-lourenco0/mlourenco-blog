"use server"

import { connectToDatabase } from "@/lib/validations/mongoose"
import Post from "@/lib/models/post.model";
import { revalidatePath } from "next/cache";

export async function updatePost(postInfo: {
  id: string,
  title: string,
  author: string,
  publishedAt: Date,
  timeToRead: number,
  content: string,
  postId: string,
  imageURL: string,
  imageAlt: string,
}, path: string = '/post/edit'): Promise<void> {

  connectToDatabase();

  try {
    await Post.findOneAndUpdate({ postId: postInfo.postId }, postInfo, { upsert: true, new: true });

    if (path === '/post/edit') {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Error updating post: ${error}`);
  }
}

export async function getPosts(numberOfPosts: number): Promise<typeof Post[]> {

  connectToDatabase();
  
  try {
    const posts = await Post.find().sort({ publishedAt: -1 }).limit(numberOfPosts);
    return posts;
  } catch (error: any) {
    throw new Error(`Error retrieving posts: ${error}`);
  }
}
