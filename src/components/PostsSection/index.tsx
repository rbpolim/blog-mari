import { useQuery } from "@apollo/client";

import { PostCard } from "../PostCard";

import { GetPostsQuery, GET_POSTS } from "../../graphql/queries/get-posts-query";
import { ShimmerCard } from "../ShimmerCard";

export function PostsSection() {
  const { data, error, loading } = useQuery<GetPostsQuery>(GET_POSTS)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error! {error.message}</div>
  }

  return (
    <section className="mt-20 space-y-10 my-32 ">
      <div className="relative mb-16 2xl:mb-28">
        <h2 className="text-6xl font-bold">
          New Post
        </h2>

        <div className="absolute bottom-0 -z-10 h-7 w-[320px] bg-orange-100" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {data?.posts.map((post) => (
          <>
            <PostCard
              key={post.id}
              post={post}
            />

            {/* <ShimmerCard /> */}
          </>
        ))}
      </div>
    </section>
  )
}
