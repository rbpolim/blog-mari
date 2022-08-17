import { useQuery } from "@apollo/client";

import { PostCard } from "../PostCard";

import { GetPostsQuery, GET_POSTS } from "../../graphql/queries/get-posts-query";

export function PostsSection() {
  const { data, error, loading } = useQuery<GetPostsQuery>(GET_POSTS)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error! {error.message}</div>
  }

  return (
    <section className="mt-20 space-y-10">
      <div className="relative mb-32">
        <h2 className="text-6xl font-bold">
          New Post
        </h2>

        <div className="absolute bottom-0 -z-10 h-7 w-[320px] bg-yellow-300" />
      </div>

      <div className="grid grid-cols-2 gap-20 ">
        {data?.posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </section>
  )
}
