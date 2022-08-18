import { Link } from "react-router-dom";

import { Post } from "../../graphql/queries/get-posts-query";

const badges = [
  'asian',
  'bakery',
  'italian'
]
type PostCardProps = {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="flex flex-col p-6 border border-zinc-800 hover:bg-gradient-to-b hover:from-transparent hover:to-orange-100
        hover:border-orange-900 hover:shadow-lg rounded-md transition-colors duration-200 hover:translate-y-1 space-y-2"
    >
      <h3 className="text-left text-4xl font-bold">
        {post.title}
      </h3>

      <p className="mt-10 text-left text-sm">
        {post.shortDescription}
      </p>

      <div className="flex items-center gap-2 pt-4">
        {badges.map((badge) => (
          <span className="py-1 px-2 bg-white border border-orange-900 rounded-2xl text-sm text-orange-900">
            {badge}
          </span>
        ))}
      </div>
    </Link>
  )
}
