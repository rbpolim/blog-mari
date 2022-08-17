import { Link } from "react-router-dom";

import { Post } from "../../graphql/queries/get-posts-query";

type PostCardProps = {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="p-6 border border-transparent hover:border hover:border-yellow-300 rounded-md transition-colors duration-200 hover:translate-y-1"
    >
      <h3 className="text-left text-4xl font-bold">
        {post.title}
      </h3>

      <p className="mt-4 text-left">
        {post.shortDescription}
      </p>
    </Link>
  )
}
