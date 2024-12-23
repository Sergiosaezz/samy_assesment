import { ImageItem } from "../interfaces";
import { PriceTag } from "./PriceTag";

type Props = {
  item: ImageItem;
};

export const Card = ({ item }: Props) => (
  <div className="w-[400px] h-[460px] rounded overflow-hidden bg-gray-100 border border-card-border flex flex-col mb-10">
    <div className="h-[360px] w-full relative inline-block">
      <img
        className="w-full h-full object-cover mask-triangle"
        src={item.picture}
        alt={item.title}
      />
      <PriceTag price={item.price} />
    </div>
    <div className="p-4 flex-1 flex flex-col items-center justify-center">
      <h2 className="text-lg text-center">{item.title.toUpperCase()}</h2>
      <p className="text-sm ">
        <span className="text-side-gray">by</span> {item.author}
      </p>
    </div>
  </div>
);
