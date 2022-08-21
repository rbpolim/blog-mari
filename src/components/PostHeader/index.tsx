type PostHeaderProps = {
  title: string
  createdAt: string
}

export function PostHeader({ title, createdAt }: PostHeaderProps) {
  return (
    <header>
      <div className="relative mb-4">
        <h2 className="text-6xl font-bold">
          {title}
        </h2>

        <div className="absolute bottom-0 -z-10 h-7 w-full bg-orange-200" />
      </div>

      <span className="text-xl">{createdAt}</span>
    </header>
  )
}
