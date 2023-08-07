import { Dot, MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  title: string;
  publishedAt: string;
  timeToRead: string;
  content: string;
  postId: string;
  imageURL: string;
  imageAlt: string;
}

const ReadButton = ({ postId }: { postId: string }) => {
  return (
    <Link href={`/post/${postId}`}>
      <Button
        variant={'outline'}
        className='w-fit h-auto rounded-full font-light border-black text-xs px-3 mt-2 bg-neutral-100 hover:bg-neutral-300/30'
      >
        Continue reading
        <MoveRight className='ml-2 w-4 h-4' />
      </Button>
    </Link>
  );
};

const PostTitle = ({ title }: { title: string }) => {
  return (
    <h2 className='text-2xl font-serif font-semibold leading-7'>{title}</h2>
  );
}

const PostInfo = ({ publishedAt, timeToRead }: { publishedAt: string, timeToRead: string }) => {
  return (
    <div className='flex flex-row mb-2 items-center text-xs text-neutral-600 gap-1'>
      <span>{publishedAt}</span>
      <Dot />
      <span>{timeToRead}</span>
    </div>
  );
}

const PostImage = ({ imageURL, imageAlt }: { imageURL: string, imageAlt: string }) => {
  return (
    <div className='flex items-center mx-auto'>
      <Image
        src={imageURL}
        width={200}
        height={100}
        alt={imageAlt}
      />
    </div>
  );
}

const PostContent = ({ content }: { content: string }) => {
  return (
    <p className='text-base font-sans font-light leading-5 text-neutral-600 line-clamp-5'>
      {content}
    </p>
  );
}

export function BlogCard({ title, publishedAt, timeToRead, content, postId, imageURL, imageAlt }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <PostImage imageURL={imageURL} imageAlt={imageAlt} />
      <PostTitle title={title} />
      <PostInfo publishedAt={publishedAt} timeToRead={timeToRead} />
      <PostContent content={content} />
      <ReadButton postId={postId} />
    </div>
  )
}