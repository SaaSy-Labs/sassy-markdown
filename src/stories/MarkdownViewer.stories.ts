import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownViewer } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/markdownViewer",
  component: MarkdownViewer,
  tags: ["autodocs"],
  argTypes: {
    dynamicData: { control: "text" },
  },
} satisfies Meta<typeof MarkdownViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    terms: ["**My name is :** \n \n ${name}"],
    dynamicData: '{"name":"Julien"}',
  },
};
