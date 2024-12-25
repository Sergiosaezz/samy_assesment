import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GetImagesVariables, GetImagesResult, ImageItem } from "../interfaces";
import { GET_IMAGES, LIKE_IMAGE } from "../api/images";

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

  const [likeImageMutation] = useMutation(LIKE_IMAGE);

  const likeImage = async (imageId: ImageItem["id"]) => {
    try {
      await likeImageMutation({
        variables: {
          input: {
            imageId,
          },
        },
      });
    } catch (error) {
      console.error("Error liking image:", error);
    }
  };
  return {
    loading,
    error,
    images: data?.images,
    loadMore,
    filterByTitle,
    likeImage,
  };
};
