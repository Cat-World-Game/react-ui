import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "../src/main";

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "32px",
    thickness: 8,
  },
};
