import { LinkSimple } from "phosphor-react";
import { Link } from "react-router-dom";

import { Post } from "../../graphql/queries/get-posts-query";

type PostCardProps = {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="flex flex-col p-6 border border-zinc-600 hover:border-orange-800 hover:bg-gradient-to-b hover:from-transparent hover:to-orange-100 shadow-md hover:shadow-lg rounded-md transition-colors duration-200 hover:translate-y-1 space-y-2 active:scale-95 bg-white relative"
    >
      <h3 className="text-left text-3xl font-bold">
        {post.title}
      </h3>

      <p className="mt-10 text-left text-sm">
        {post.shortDescription}
      </p>

      <div className="flex items-center gap-2 pt-4">
        {post.genres.map((badge) => (
          <span className="py-1 px-2 uppercase border ring-1 ring-orange-600 rounded-2xl text-xs text-white bg-orange-500 font-bold">
            {badge}
          </span>
        ))}
      </div>
    </Link>
  )
}
