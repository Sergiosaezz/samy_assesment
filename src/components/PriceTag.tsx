import { useCurrencyFormatter } from "../hooks/usePrice";

type Props = {
  price: number;
};

export const PriceTag = ({ price }: Props) => {
  const formatPrice = useCurrencyFormatter();
  return (
    <>
      <img
        src="price-triangle.png"
        alt="Overlay Image"
        className="absolute top-0 left-0 max-size-24"
      />
      <div className="absolute text-sm top-0 left-0 pl-3 pt-5">
        {formatPrice(price)}
      </div>
    </>
  );
};
