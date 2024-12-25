import { useCurrencyFormatter } from "./usePrice";
import { describe, it, expect, vi } from "vitest";

describe("useCurrencyFormatter", () => {
  it("should format positive number correctly", () => {
    const formatCurrency = useCurrencyFormatter();
    expect(formatCurrency(12)).toBe("12.00 €");
  });

  it("should format zero correctly", () => {
    const formatCurrency = useCurrencyFormatter();
    expect(formatCurrency(0)).toBe("0.00 €");
  });

  it("should format negative number correctly", () => {
    const formatCurrency = useCurrencyFormatter();
    expect(formatCurrency(-1234.56)).toBe("-1,234.56 €");
  });

  it("should handle very large numbers", () => {
    const formatCurrency = useCurrencyFormatter();
    expect(formatCurrency(1234567890.12)).toBe("1,234,567,890.12 €");
  });

  it("should format small numbers correctly", () => {
    const formatCurrency = useCurrencyFormatter();
    expect(formatCurrency(0.01)).toBe("0.01 €");
  });

  it("should not re-create the formatter on each call", () => {
    const spy = vi.spyOn(Intl, "NumberFormat");
    const formatCurrency = useCurrencyFormatter();

    formatCurrency(1234.56);
    formatCurrency(5678.9);
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockRestore();
  });
});
