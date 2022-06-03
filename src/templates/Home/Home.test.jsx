import Home from "./index";
import { renderTheme } from "../../styles/render-theme";

describe("<Home/>", () => {
  it("should render Home", () => {
    renderTheme(<Home />);
  });
});
