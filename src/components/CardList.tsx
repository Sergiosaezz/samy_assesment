import InfiniteScroll from "react-infinite-scroll-component";
import { GetImagesResult } from "../interfaces";
import { Card } from "./Card";
import { Loader } from "./Loader";

type Props = {
  list: GetImagesResult["images"]["edges"];
  loadMore: () => void;
  hasMore: boolean;
};

export const CardList = ({ list, loadMore, hasMore }: Props) => (
  <InfiniteScroll
    dataLength={list.length}
    next={loadMore}
    hasMore={hasMore}
    loader={<Loader />}
    style={{ overflow: "hidden" }}
  >
    <ul className="flex flex-wrap justify-center gap-5 lg:justify-between">
      {list.map(({ node }) => (
        <Card item={node} />
      ))}
    </ul>
  </InfiniteScroll>
);
