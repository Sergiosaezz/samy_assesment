import InfiniteScroll from "react-infinite-scroll-component";
import { GetImagesResult, ImageItem } from "../interfaces";
import { Card } from "./Card";
import { Loader } from "./Loader";

type Props = {
  list: GetImagesResult["images"]["edges"];
  loadMore: () => void;
  hasMore: boolean;
  handleLike: (image: ImageItem["id"]) => Promise<void>;
};

export const CardList = ({ list, loadMore, hasMore, handleLike }: Props) => (
  <InfiniteScroll
    dataLength={list.length}
    next={loadMore}
    hasMore={hasMore}
    loader={<Loader />}
    style={{ overflow: "hidden" }}
  >
    <ul
      className="flex flex-wrap justify-center gap-5 lg:justify-between"
      data-test="image-list"
    >
      {list.map(({ node }) => (
        <Card item={node} key={node.id} handleLike={handleLike} />
      ))}
    </ul>
  </InfiniteScroll>
);
