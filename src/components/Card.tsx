import { ImageItem } from "../interfaces";

type Props = {
  item: ImageItem;
};

export const Card = ({ item }: Props) => (
  <div className="w-[400px] h-[480px] rounded overflow-hidden shadow-lg bg-white border border-gray-200 flex flex-col">
    <div className="h-[360px] w-full">
      <img
        className="w-full h-full object-cover"
        src={item.picture}
        alt={item.title}
      />
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between">
      <h2 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h2>
      <p className="text-sm text-gray-600">By {item.author}</p>
    </div>
  </div>
);
