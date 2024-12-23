import { gql } from "@apollo/client";

export const GET_IMAGES = gql`
  query GetImages($title: String, $first: Int, $after: String) {
    images(title: $title, first: $first, after: $after) {
      edges {
        node {
          id
          title
          picture
          liked
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
