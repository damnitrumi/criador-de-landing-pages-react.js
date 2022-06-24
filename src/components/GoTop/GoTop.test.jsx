import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { GoTop } from "./index";
describe("GoTop", () => {
  it("should render go to top button", () => {
    renderTheme(<GoTop />);
    expect(screen.getByRole("link", { name: "Go To Top" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go To Top" })).toHaveAttribute(
      "href",
      "#"
    );
    expect(screen.getByRole("link", { name: "Go To Top" }))
      .toMatchInlineSnapshot(`
      .c0 {
        position: fixed;
        background: #0a1128;
        color: #FFFFFF;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        bottom: 2rem;
        right: 2rem;
        z-index: 6;
      }

      .c1 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      <a
        aria-label="Go To Top"
        class="c0"
        href="#"
        title="Go To Top"
      >
        <svg
          aria-hidden="true"
          class="c1"
          fill="currentColor"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0h24v24H0V0z"
            fill="none"
          />
          <path
            d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
          />
        </svg>
      </a>
    `);
  });
});
