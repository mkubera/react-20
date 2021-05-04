import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

const { dateFrom, dateTo } = {
  dateFrom: 1999,
  dateTo: 2021,
};

test("renders correct to and from dates", () => {
  render(<Footer dateFrom={dateFrom} dateTo={dateTo} />);
  const regexp = new RegExp(`Copyright ${dateFrom}-${dateTo}.`, "i");
  const element = screen.getByText(regexp);
  expect(element).toBeInTheDocument();
});
