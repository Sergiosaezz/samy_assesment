export interface GetImagesVariables {
  title?: string;
  first?: number;
  after?: string;
}

export interface ImageItem {
  id: string;
  title: string;
  picture: string;
  liked: boolean;
  likesCount: number;
  price: number;
  author: string;
}

export interface GetImagesResult {
  images: {
    edges: {
      node: ImageItem;
    }[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}
