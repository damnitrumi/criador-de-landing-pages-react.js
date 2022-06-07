import { SectionBackground } from ".";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          placeat voluptatibus cum aperiam amet excepturi sed quidem ad
          praesentium dicta odio eligendi, dolore tenetur quisquam maxime. Nihil
          quibusdam delectus magnam.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
