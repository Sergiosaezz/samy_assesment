import { useCurrencyFormatter } from "./usePrice";
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";

const TestComponent = ({ price }: { price: number }) => {
  const formatCurrency = useCurrencyFormatter();
  return <div>{formatCurrency(price)}</div>;
};

describe("useCurrencyFormatter", () => {
  it("should format positive number correctly", () => {
    const { getByText } = render(<TestComponent price={12} />);
    expect(getByText("12.00 €")).toBeTruthy();
  });

  it("should format zero correctly", () => {
    const { getByText } = render(<TestComponent price={0} />);
    expect(getByText("0.00 €")).toBeTruthy();
  });

  it("should format negative number correctly", () => {
    const { getByText } = render(<TestComponent price={-1234.56} />);
    expect(getByText("-1,234.56 €")).toBeTruthy();
  });

  it("should handle very large numbers", () => {
    const { getByText } = render(<TestComponent price={1234567890.12} />);
    expect(getByText("1,234,567,890.12 €")).toBeTruthy();
  });

  it("should format small numbers correctly", () => {
    const { getByText } = render(<TestComponent price={0.01} />);
    expect(getByText("0.01 €")).toBeTruthy();
  });

  it("should not re-create the formatter on each call", () => {
    const spy = vi.spyOn(Intl, "NumberFormat");
    const { rerender } = render(<TestComponent price={1234.56} />);

    rerender(<TestComponent price={5678.9} />);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
