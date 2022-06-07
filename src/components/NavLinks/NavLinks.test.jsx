import { screen } from "@testing-library/react";
import { NavLinks } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";
import mock from "./mock";

describe("NavLinks", () => {
  it("should render the correct amount of links", () => {
    renderTheme(<NavLinks links={mock} />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(mock.length);
  });

  it("should render not render links", () => {
    renderTheme(<NavLinks />);

    const links = screen.queryAllByText(/links/i);

    expect(links).toHaveLength(0);
  });

  it("should render with the correct media", () => {
    renderTheme(<NavLinks links={mock} />);

    const navLink = screen.getByText(/link 10/i).parentElement;
    expect(navLink).toHaveStyleRule("flex-flow", "column wrap", {
      media: theme.media.lteMedium,
    });
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<NavLinks links={mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
