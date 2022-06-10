import { Menu } from ".";
import linksMock from "../NavLinks/mock";

export default {
  title: "Menu",
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: "logo",
      srcImg: "",
      link: "#target",
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ background: "gray", height: "100vh" }}>
      <Menu {...args} />
    </div>
  );
};
