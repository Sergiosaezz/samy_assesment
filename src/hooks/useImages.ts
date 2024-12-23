import { useQuery } from "@apollo/client";
import { GetImagesVariables, GetImagesResult } from "../interfaces";
import { GET_IMAGES } from "../api/images";

export const useImages = (initialVariables: GetImagesVariables) => {
  const { loading, error, data, fetchMore } = useQuery<
    GetImagesResult,
    GetImagesVariables
  >(GET_IMAGES, { variables: initialVariables });

  const loadMore = () => {
    if (data?.images.pageInfo.hasNextPage) {
      fetchMore({
        variables: { after: data.images.pageInfo.endCursor },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;

          return {
            images: {
              edges: [
                ...previousResult.images.edges,
                ...fetchMoreResult.images.edges,
              ],
              pageInfo: fetchMoreResult.images.pageInfo,
            },
          };
        },
      });
    }
  };

  return { loading, error, images: data?.images, loadMore };
};
