import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Star } from "phosphor-react";

import { Footer } from "../../components/Footer";
import { PostHeader } from "../../components/PostHeader";
import { ReviewInfoCard } from "../../components/ReviewInfoCard";
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
    <div className="flex flex-col min-h-screen min-w-full overflow-x-hidden text-slate-800">
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

        <p className="mt-8 text-sm max-w-3xl mx-auto">
          {data?.post.description.markdown}
        </p>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <ReviewInfoCard title="AVALIAÇÃO">
            <div className="flex items-center gap-2">
              <Star size={32} weight="fill" className="text-orange-500" />
              <span className="text-2xl text-orange-500">
                {data?.post.rating}
              </span>
            </div>
          </ReviewInfoCard>

          <ReviewInfoCard title="TOTAL">
            <span className="text-2xl text-orange-500">
              ${data?.post.price}
            </span>
          </ReviewInfoCard>

          <ReviewInfoCard title="TAGS">
            {data?.post.genres.map((genre) => (
              <span className="mr-2 py-1 px-2 border border-orange-600 rounded-lg text-xs text-white bg-orange-600 font-bold">
                {genre}
              </span>
            ))}
          </ReviewInfoCard>
        </div>
      </div>

      <Footer />
    </div>
  )
}
