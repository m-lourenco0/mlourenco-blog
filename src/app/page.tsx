import { ChevronDown, Dot, Move, MoveRight } from 'lucide-react'
import { BlogCard } from '@/components/blog-card'
import { HomeText } from '@/constants/home-text'



export default function Home() {
  return (
    <main className="flex flex-col items-start min-h-screen max-w-4xl mx-auto p-8 gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-serif font-bold leading-tight">
          {HomeText.title}
        </h1>
        <span className="text-base font-serif font-light text-neutral-600">
          {HomeText.author}
        </span>
        <p>
          {HomeText.description}
        </p>
      </div>
      <div className='mx-auto'>
        <ChevronDown />
      </div>
      <div className='flex flex-col space-y-12'>
        <BlogCard
          title='What playing video games taught me about flow state and productivity'
          publishedAt='May 15, 2022'
          timeToRead='4 min read'
          content='POV: It’s a ranked match, and you are playing with a couple of other players on Master. Your KD ratio is on the line, your pride is on the line, and your rating is on the line. You do everything possible to avoid being killed — jumping...'
          postId='what-playing-video-games-taught-me-about-flow-state-and-productivity'
          imageURL='https://i.pinimg.com/originals/c1/b6/ae/c1b6ae3af4cd71e3e7b1e83fb818238e.png'
          imageAlt='Video Game Controller'
        />
        <BlogCard
          title='What playing video games taught me about flow state and productivity'
          publishedAt='May 15, 2022'
          timeToRead='4 min read'
          content='POV: It’s a ranked match, and you are playing with a couple of other players on Master. Your KD ratio is on the line, your pride is on the line, and your rating is on the line. You do everything possible to avoid being killed — jumping...'
          postId='what-playing-video-games-taught-me-about-flow-state-and-productivity'
          imageURL='https://i.pinimg.com/originals/c1/b6/ae/c1b6ae3af4cd71e3e7b1e83fb818238e.png'
          imageAlt='Video Game Controller'
        />
        <BlogCard
          title='What playing video games taught me about flow state and productivity'
          publishedAt='May 15, 2022'
          timeToRead='4 min read'
          content='POV: It’s a ranked match, and you are playing with a couple of other players on Master. Your KD ratio is on the line, your pride is on the line, and your rating is on the line. You do everything possible to avoid being killed — jumping...'
          postId='what-playing-video-games-taught-me-about-flow-state-and-productivity'
          imageURL='https://i.pinimg.com/originals/c1/b6/ae/c1b6ae3af4cd71e3e7b1e83fb818238e.png'
          imageAlt='Video Game Controller'
        />
      </div>
    </main>
  )
}
