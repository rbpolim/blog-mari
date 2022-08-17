import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GetPostsBySlugQuery, GET_POSTS_BY_SLUG } from "../../graphql/queries/get-posts-by-slug-query";

export function Post() {
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
    <div>
      <h1>{data?.post.title}</h1>
      <h1>{data?.post.description.markdown}</h1>
      <h1>{data?.post.price}</h1>
      <h1>{data?.post.genres}</h1>
      <h1>{data?.post.rating}</h1>
    </div>
  )
}
