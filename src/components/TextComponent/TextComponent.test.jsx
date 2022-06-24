import { TextComponent } from "./index";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";
import { screen } from "@testing-library/react";

describe("<TextComponent/>", () => {
  it("should render a text", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const p = screen.getByText("Children");

    expect(p).toBeInTheDocument();
  });

  it("should render with correct font-size", () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    const p = screen.getByText("Children");

    expect(p).toHaveStyle({
      "font-size": theme.font.sizes.medium,
    });
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
