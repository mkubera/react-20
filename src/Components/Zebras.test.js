import { render, screen } from "@testing-library/react";
import Zebras from "./Zebras";

test("renders Zebras header", () => {
  render(<Zebras />);
  const headerElement = screen.getByText(/zebras/i);
  expect(headerElement).toBeInTheDocument();
});
