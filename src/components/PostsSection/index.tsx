import { useQuery } from "@apollo/client";

import { PostCard } from "../PostCard";
import { ShimmerCard } from "../ShimmerCard";

import { GetPostsQuery, GET_POSTS } from "../../graphql/queries/get-posts-query";

export function PostsSection() {
  const { data, loading, error } = useQuery<GetPostsQuery>(GET_POSTS)

  if (error) {
    return <div>Error! {error.message}</div>
  }

  return (
    <section className="mt-20 space-y-10 my-32 ">
      <h2 className="text-5xl font-bold pb-8">
        New Post
        <div className="w-20 h-3 bg-orange-300" />
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {loading ? (
          <ShimmerCard />
        ) : (
          data?.posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))
        )}
      </div>
    </section>
  )
}
