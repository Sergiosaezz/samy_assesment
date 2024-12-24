import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GetImagesVariables, GetImagesResult } from "../interfaces";
import { GET_IMAGES } from "../api/images";

export const useImages = (initialVariables: GetImagesVariables) => {
  const [title, setTitle] = useState<string>();
  const { loading, error, data, fetchMore, refetch } = useQuery<
    GetImagesResult,
    GetImagesVariables
  >(GET_IMAGES, {
    variables: { ...initialVariables, title },
  });

  const loadMore = () => {
    if (data?.images.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data.images.pageInfo.endCursor,
          title,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return previousResult;

          const updatedImages = {
            edges: [
              ...previousResult.images.edges,
              ...fetchMoreResult.images.edges,
            ],
            pageInfo: fetchMoreResult.images.pageInfo,
          };

          return { images: updatedImages };
        },
      });
    }
  };

  const filterByTitle = (newTitle: string) => {
    setTitle(newTitle);
    refetch({
      ...initialVariables,
      title: newTitle,
    });
  };

  return {
    loading,
    error,
    images: data?.images,
    loadMore,
    filterByTitle,
  };
};
