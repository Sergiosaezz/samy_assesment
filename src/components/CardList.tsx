import { GetImagesResult } from "../interfaces";
import { Card } from "./Card";

type Props = {
  list?: GetImagesResult["images"]["edges"];
};

export const CardList = ({ list }: Props) => (
  <ul className="flex flex-wrap gap-3">
    {list?.map(({ node }) => (
      <Card item={node} />
    ))}
  </ul>
);
