import { gql } from "@apollo/client";

export const GET_IMAGES = gql`
  query GetImages($title: String, $first: Int, $after: String) {
    images(title: $title, first: $first, after: $after) {
      edges {
        node {
          id
          title
          liked
          picture
          likesCount
          price
          author
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const LIKE_IMAGE = gql`
  mutation LikeImage($input: LikeImageInput!) {
    likeImage(input: $input) {
      image {
        id
        liked
        likesCount
      }
    }
  }
`;
