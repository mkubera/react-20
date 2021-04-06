import { render, screen } from "@testing-library/react";
import ZebraImage from "./ZebraImage";

const props = {
  id: 1,
  name: "Fikusik",
  src:
    "https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  alt: "Zebra image 1.",
  width: 200,
  height: 250,
  isInTheWild: true,
};

test("renders ZebraImage header", () => {
  render(<ZebraImage {...props} />);
  const headerElement = screen.getByText(/1 Fikusik/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders Is In The Wild when isInTheWild is set to true", () => {
  render(<ZebraImage {...props} />);
  const pElement = screen.getByText(/Is In the Wild!/i);
  expect(pElement).toBeInTheDocument();
});

test("renders Is Not In The Wild when isInTheWild is set to false", () => {
  props.isInTheWild = false;
  render(<ZebraImage {...props} />);
  const pElement = screen.getByText(/Is not in the wild :\//i);
  expect(pElement).toBeInTheDocument();
});

test("renders image with alt", () => {
  render(<ZebraImage {...props} />);
  const imgElement = screen.getByAltText(/Zebra image 1./i);
  expect(imgElement).toBeInTheDocument();
});

test("renders image with correct width and height", () => {
  render(<ZebraImage {...props} />);
  const imgElement = screen.getByAltText(/Zebra image 1./i);
  expect(imgElement).toHaveAttribute("width", String(props.width));
  expect(imgElement).toHaveAttribute("height", String(props.height));
});
