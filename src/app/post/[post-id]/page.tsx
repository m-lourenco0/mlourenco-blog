import { MoveLeft, MoveRight, Dot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BlogCard } from '@/components/blog-card'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

const PostTitle = ({ title }: { title: string }) => {
  return (
    <h2 className='text-4xl font-serif font-semibold leading-[3rem] mt-8'>{title}</h2>
  );
}

const PostInfo = ({ publishedAt, timeToRead }: { publishedAt: string, timeToRead: string }) => {
  return (
    <div className='flex flex-row mb-2 mt-4 items-center font-semibold text-xs text-neutral-600 gap-1'>
      <span>{publishedAt}</span>
      <Dot />
      <span>{timeToRead}</span>
    </div>
  );
}

const PostContent = ({ content }: { content: string }) => {
  return (
    <div className='text-base font-sans font-light leading-normal text-neutral-600 mt-6'>
      {content}
    </div>
  );
}

export const metadata: Metadata = {
  title: "Someone's Blog",
  description: 'Who knows what this is about?',
}

export default function PostPage({ params }: { params: {postId: string} }) {
  return (
    <main className="flex flex-col items-start min-h-screen max-w-4xl mx-auto p-8">
      <div className="flex flex-row justify-between w-full">
        <Link href={'/'} className="my-auto text-base font-serif font-bold">
          Common Sense
        </Link>
        <div className='flex flex-row'>
          <Button variant={'ghost'} className='px-2 py-0'><MoveLeft /></Button>
          <Button variant={'ghost'} className='px-2 py-0'><MoveRight /></Button>
        </div>
      </div>

      <PostTitle title={'The title of the post'} />
      <PostInfo publishedAt={'May 15, 2022'} timeToRead={'5 min read'} />

      <PostContent content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget convallis enim. Nullam fermentum tincidunt lectus eu posuere. Morbi faucibus, risus ut laoreet consequat, metus metus mattis elit, quis laoreet felis est ac mi. Pellentesque a mauris tincidunt, faucibus sapien non, placerat eros. Pellentesque rhoncus viverra leo, eget venenatis nisl ornare rhoncus. Proin tristique vitae odio eu scelerisque. Aenean tincidunt massa faucibus, pretium augue vestibulum, facilisis ante. Mauris in ipsum feugiat, laoreet nunc ac, consequat augue. Nullam vulputate porttitor risus, nec auctor nibh condimentum sit amet. Sed ac mauris faucibus, pellentesque ligula at, viverra mauris. Aenean tincidunt nisi eget neque pellentesque viverra et ac libero.\n\nEtiam tellus turpis, maximus at euismod et, venenatis finibus diam. Praesent ut fringilla lectus. Aenean placerat nisl in porta vulputate. Aliquam vitae aliquet nibh. Donec sollicitudin mi ut ornare vestibulum. Mauris faucibus ex at mauris malesuada ornare. Mauris consectetur neque a massa placerat mattis. Nam vitae pharetra massa, vel fermentum felis. Vestibulum id dolor sed odio sagittis facilisis. Pellentesque quis lobortis ante. Mauris ornare libero mauris, non posuere enim maximus a. Suspendisse vestibulum eget lectus elementum placerat. Aliquam lorem arcu, porttitor in nisl non, interdum vehicula nibh. Ut ante sem, consequat quis massa in, sollicitudin ultricies enim.\n\nNullam maximus orci et blandit lobortis. Integer rhoncus mauris sed mi dapibus lobortis. Nunc ullamcorper vehicula aliquam. Donec vitae porta ex. Donec mollis diam at auctor egestas. Vestibulum at tristique nisl. Donec sed dui euismod, mattis lacus ut, tristique nibh. Maecenas in ornare justo. '} />
      <div className='flex flex-col space-y-12'>

      </div>
    </main>
  )
}
