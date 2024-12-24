import { ImageItem } from "../interfaces";
import { LikeIcon } from "./LikeIcon";
import { PriceTag } from "./PriceTag";
import { ShareIcon } from "./ShareIcon";

type Props = {
  item: ImageItem;
};

export const Card = ({ item }: Props) => (
  <div className="w-[328px] h-[509px] lg:w-[400px] lg:h-[460px] rounded overflow-hidden bg-gray-100 border border-card-border flex flex-col mb-10">
    <div className="h-[360px] w-full relative inline-block">
      <img
        className="w-full h-full object-cover mask-triangle"
        src={item.picture}
        alt={item.title}
      />
      <PriceTag price={item.price} />
      <div className="absolute right-0 bottom-0 flex flex-col gap-2 justify-center items-center p-5">
        <div className="flex flex-col  gap-1 text-sm text-white justify-center items-center">
          <LikeIcon />
          <span>{item.likesCount}</span>
        </div>
        <div className="flex flex-col gap-1 text-sm text-white justify-center items-center">
          <ShareIcon color="white" />
          <span>0</span>
        </div>
      </div>
    </div>
    <div className="p-4 flex-1 flex flex-col items-center justify-center">
      <h2 className="text-lg text-center">{item.title.toUpperCase()}</h2>
      <p className="text-sm ">
        <span className="text-side-gray">by</span> {item.author}
      </p>
    </div>
    <div className="lg:hidden flex justify-center h-16 w-full ">
      <div className="flex justify-center items-center gap-1 w-full text-sm border bg-gray-100 ">
        <span>{item.likesCount}</span>
        <LikeIcon />
      </div>
      <div className="flex justify-center items-center gap-1 w-full text-sm border bg-gray-100">
        <span>0</span>
        <ShareIcon />
      </div>
    </div>
  </div>
);
