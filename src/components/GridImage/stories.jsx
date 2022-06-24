import mock from "./mock";
import { GridImage } from "./index";

export default {
  title: "GridImage",
  component: GridImage,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
