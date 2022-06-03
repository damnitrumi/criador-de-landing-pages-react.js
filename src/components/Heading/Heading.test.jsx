import { screen } from "@testing-library/react";
import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";

describe("<Heading/>", () => {
  it("should render with default vales", () => {
    renderTheme(<Heading>texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      "font-size": theme.font.sizes.xhuge,
      "text-transform": "none",
    });
  });

  it("should render with white color", () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("should render with small font-size", () => {
    renderTheme(<Heading size="small">texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.medium,
    });
  });

  it("should render with medium font-size", () => {
    renderTheme(<Heading size="medium">texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.large,
    });
  });

  it("should render with big font-size", () => {
    renderTheme(<Heading size="big">texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.xlarge,
    });
  });

  it("should render with huge font-size", () => {
    renderTheme(<Heading size="huge">texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.font.sizes.xhuge,
    });
  });

  it("should render correct font-size using mobile", () => {
    renderTheme(<Heading size="huge">texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyleRule("font-size", theme.font.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });

  it("should render with text-transform uppercase", () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);

    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "text-transform": "uppercase",
    });
  });

  it("should render the correct heading element", () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);

    const h6 = container.querySelector("h6");

    expect(h6.tagName.toLowerCase()).toBe("h6");
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<Heading>texto</Heading>);

    const h1 = container.querySelector("h1");

    expect(h1).toMatchSnapshot();
  });
});
