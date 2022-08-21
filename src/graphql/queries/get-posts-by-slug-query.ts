import { gql } from "@apollo/client";

type Image = {
  url: string;
};

export type Post = {
  id: string;
  title: string;
  description: {
    markdown: string;
  };
  price: number;
  rating: number;
  genres: string;
  images: Image[];
  createdAt: string;
  slug: string;
};

export type GetPostsBySlugQuery = {
  post: Post;
};

export const GET_POSTS_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      createdAt
      description {
        markdown
      }
      price
      rating
      genres
      images {
        url
      }
    }
  }
`;
