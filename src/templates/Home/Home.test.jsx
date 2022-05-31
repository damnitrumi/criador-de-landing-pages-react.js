import Home from "./index";
import { renderTheme } from "../../styles/render-theme";
import { screen } from "@testing-library/react";
import { theme } from "../../styles/theme";

it("should render with background mainBg", () => {
  renderTheme(<Home />);

  const headingContainer = screen.getByRole("heading", {
    name: "Hello!",
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });

  expect(headingContainer).toHaveStyleRule("background", "red");

  expect(headingContainer).toMatchSnapshot();
});
