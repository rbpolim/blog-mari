import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { PostHeader } from "../../components/PostHeader";
import { ReviewInfos } from "../../components/ReviewInfos";
import { Slider, Slide } from "../../components/Slider";

import { GetPostsBySlugQuery, GET_POSTS_BY_SLUG } from "../../graphql/queries/get-posts-by-slug-query";

export function PostPage() {
  const { slug } = useParams();

  const { data, loading, error } = useQuery<GetPostsBySlugQuery>(GET_POSTS_BY_SLUG, {
    variables: { slug }
  });

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error! {error.message}</div>
  }

  return (
    <div className="flex flex-col min-h-screen min-w-full overflow-x-hidden">
      <div className="flex flex-col flex-1 max-w-5xl mx-auto my-8 mb-40 leading-relaxed">
        <PostHeader
          title={data!.post.title}
          createdAt={data!.post.createdAt}
        />

        <Slider>
          {data?.post.images.map((image) => (
            <Slide key={image.id}>
              <img
                alt="Image of the post"
                src={image.url}
                className="object-cover object-center cursor-grab"
              />
            </Slide>
          ))}
        </Slider>

        <p className="mt-8 text-sm text-zinc-800 max-w-3xl mx-auto">
          {data?.post.description.markdown}
        </p>

        <ReviewInfos
          rating={data!.post.rating}
          price={data!.post.price}
          genres={data!.post.genres}
        />
      </div>

      <Footer />
    </div>
  )
}
