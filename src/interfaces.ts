export interface GetImagesVariables {
  title?: string;
  first?: number;
  after?: string;
}

export interface GetImagesResult {
  images: {
    edges: {
      node: {
        id: string;
        title: string;
        picture: string;
        liked: boolean;
        likesCount: number;
      };
    }[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}
