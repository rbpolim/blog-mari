import { gql } from "@apollo/client";

export type Post = {
  id: string;
  title: string;
  shortDescription: string;
  description: {
    markdown: string;
  };
  slug: string;
  genres: string[];
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
      slug
      genres
    }
  }
`;
