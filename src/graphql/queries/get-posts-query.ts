import { gql } from "@apollo/client";

export type Post = {
  id: string;
  title: string;
  shortDescription: string;
  description: {
    markdown: string;
  };
  price: number;
  rating: number;
  createdAt: string;
  slug: string;
};

export type GetPostsQuery = {
  posts: Post[];
};

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      shortDescription
      description {
        markdown
      }
      price
      rating
      createdAt
      slug
    }
  }
`;
